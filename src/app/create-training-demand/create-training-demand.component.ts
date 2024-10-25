import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DemandeService } from '../service/demande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../service/training.service';
import { EmployeService } from '../service/employe.service';
import { DepartementService } from '../service/departement.service';
import { CategoryService } from '../service/category.service';
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
// export interface Formation {
//   nom: string;
// }
@Component({
  selector: 'app-create-training-demand',
  templateUrl: './create-training-demand.component.html',
  styleUrls: ['./create-training-demand.component.css'],
})
export class CreateTrainingDemandComponent {
  idcat:any
  onetraining: any;
  listcategories: any;
  list: any;
  iddep:any
  listdep:any
  listdesemploye: any;
  // myControl = new FormControl<string | Formation>('');
  constructor(
    private servicedemandeformation: DemandeService,
    private trainingservice: TrainingService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private employeservice: EmployeService,
    private depservice:DepartementService,
     private catservice:CategoryService,
     private formationservice:TrainingService
  ) // private modalService: MdbModalService,
  {}
  form: FormGroup;
  idf: any;
  idu = localStorage.getItem('localid');
  //modalRef: MdbModalRef<ModalComponent> | null = null;
  ide = localStorage.getItem('localid');

  ngOnInit(): void {
    this.getlistcat()
    this.getListdep();

    this.getList();

    this.ListFunction();

    this.form = this.formbuilder.group({
      nomformation: ['', Validators.required],
      objective: ['', Validators.required],
      date_souhaite: ['', Validators.required],
      critere: ['', Validators.required],
      analyse_besoin: ['', Validators.required],
    });
    console.log('id is ', this.ide);
  }
  getList() {
    this.trainingservice.AllCategories().subscribe(
      (res: any) => {
        this.list = res;
        console.log('training list =', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  create() {
    let datajson = {
      "analyse_besoin":this.form.value.analyse_besoin,
      "objective": this.form.value.objective,
      "creepar": this.idu,
      "critere": this.form.value.critere,
      "date_souhaite": this.form.value.date_souhaite,
    };

    console.log('datajson', datajson);
    this.servicedemandeformation
      .createdemand(this.ide, this.idf, datajson)
      .subscribe(
        (res: any) => {
          console.log('created', res);
          //this.router.navigateByUrl("/addmembers")
          let id = res.id;

          this.router.navigate(['/addmembers', { param: id }]);
        },

        (error: any) => {
          console.log(error);
        }
      );
  }

  // openModal() {
  //     this.modalRef = this.modalService.open(ModalComponent, {
  //       modalClass: 'modal-dialog-scrollable'
  //     })
  //   }

  ListFunction() {
    this.employeservice.departmentemployers(this.ide).subscribe(
      (res: any) => {
        this.listdesemploye = res;
        console.log('hhhhhhhhh', this.listdesemploye);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  // displayFn(formation: Formation): string {
  //   return formation && formation.nom ? formation.nom : '';
  // }

  creerformation(){
    let datajson = {
      "nom":this.form.value.nomformation,
      "idDepartement":this.iddep
    };

    this.formationservice.Createwhithcat(this.idcat,datajson).subscribe(
    (res:any)=>{this.listdep=res;console.log("crealist cat on trainingted",res)

    this.getList();
    },

    (error:any)=>{console.log(error)}

  )
  }

   getListdep(){
  this.depservice.All().subscribe(
(res:any)=>{this.listdep=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

getlistcat(){
  this.catservice.AllCategories().subscribe(
(res:any)=>{this.listcategories=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

}
