import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../service/training.service';
import { EmployeService } from '../service/employe.service';
import { CategoryService } from '../service/category.service';
import { InscriptionService } from '../service/inscription.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-inscription',
  templateUrl: './update-inscription.component.html',
  styleUrls: ['./update-inscription.component.css']
})
export class UpdateInscriptionComponent {
c:number=1
term:string
  onetraining: any;
  listcategories: any;
  list: any;
  listdesemploye: any;
  ide = localStorage.getItem('localid');
  idinscription = this.activatedrouted.snapshot.params['id'];
  e: any;
  variable: any;
  memberslist: any;
  isChecked = false;
  form: FormGroup;
  desDI = [];
  role = localStorage.getItem('roles');
  idf: any;
  listemp: any;
  uneinscription: any;
  datesouhaite:any
  constructor(
    private trainingservice: TrainingService,
    private employeservice: EmployeService,
    private categoruservice: CategoryService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private inscriptionservice: InscriptionService,
    private activatedrouted: ActivatedRoute,
    private router: Router,
    private formationservice:TrainingService
  ) {}

  idcat: any;

  ngOnInit(): void {
    this.inscription();
    this.getList();
    this.listmembers();
    this.ListFunction();

    this.form = this.formbuilder.group({


    });
  }
  getList() {
    this.formationservice.AllCategories().subscribe(
      (res: any) => {
        this.list = res;
        console.log('crealist cat on trainingted', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  update() {
    console.log('resultat', this.form.value);
    this.inscriptionservice.updateinscription(this.idinscription,this.idf, this.form.value).subscribe(
      (res: any) => {
        console.log('created');
        this.router.navigateByUrl('/inscription');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  onevent(event) {
    if (event.target.checked) {
      this.desDI.push(event.target.value);
      console.log('le tableau est ', this.desDI);
      console.log('le dernier valeur egale a', event.target.value);
      this.add(event.target.value);
    }

    if (!event.target.checked) {
      let i = this.desDI.indexOf(event.target.value);
      this.desDI.splice(i, 1);
      console.log('le tableau est ', this.desDI);
      console.log('le dernier valeur egale a', event.target.value);
      this.delete(event.target.value);
    }

    console.log('di---   ' + this.desDI);
  }

  ListFunction() {
    if (this.role == 'ROLE_CHEF') {
      this.employeservice.departmentemployers(this.ide).subscribe(
        (res: any) => {
          this.listemp = res;
          console.log('------------->', this.listemp);
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    } else if (
      this.role == 'ROLE_ADMIN' ||
      this.role == 'ROLE_SUPERADMIN' ||
      this.role == 'ROLE_RESPOSABLLERHFORMATIONETSTAGE'
    ) {
      alert('tous les employe');
      this.employeservice.All().subscribe(
        (res: any) => {
          this.listemp = res;
          console.log('mmmmmm', this.listemp);
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    }
  }

  add(id: any) {
    let myData: any = {};
    console.log('la valeur de mydata est ', myData);
    this.inscriptionservice.addmember(this.idinscription, id, myData).subscribe(
      (res: any) => {
        this.e = res;
        console.log('membre ajouté dans la base', this.e);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  delete(id: any) {
    this.inscriptionservice.deletemember(this.idinscription, id).subscribe(
      (res: any) => {
        console.log('ok');
        this.ListFunction();
      },
      (error: any) => {
        console.log('error is', error);
      }
    );
  }
  listmembers() {
    this.inscriptionservice.members(this.idinscription).subscribe(
      (res: any) => {
        this.memberslist = res;
        console.log('listemembers', this.memberslist);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  deleteone(id: any) {
    console.log('id demande =', this.idinscription);
    console.log('id user =', id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.inscriptionservice.deletemember(this.idinscription, id).subscribe(
          (res: any) => {
            console.log('ok');
            this.listmembers();
          },
          (error: any) => {
            console.log('error is', error);
          }
        );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
  ajouter() {}

  terminer() {
    this.listmembers();
  }
  inscription() {
    this.inscriptionservice.affiche(this.idinscription).subscribe(
      (res) => {
        this.uneinscription = res;
        console.log('data patch value', res);
        this.form.patchValue({
          date: this.uneinscription.date,

        });
        this.idf=this.uneinscription.formationins.id
        console.log("idf",this.idf)
         let dates=new Date(this.uneinscription.date);
        const month = String(dates.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(dates.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = dates.getFullYear();
        console.log("month",month)
        console.log("day",day)
        console.log("year",year)

let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
this.datesouhaite =year+'-'+month+'-'+day
console.log("datedebut",this.datesouhaite)



      },

      (error) => {
        console.log(error);
      }
    );

  }

}
