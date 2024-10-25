import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../service/inscription.service';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-inscription-member',
  templateUrl: './add-inscription-member.component.html',
  styleUrls: ['./add-inscription-member.component.css']
})
export class AddInscriptionMemberComponent {


  listdesemploye: any;
  ide = localStorage.getItem('localid');
  idinscription: any;
  e: any;
  variable: any;
  isChecked = false;
  form: FormGroup;
  desDI = [];
  role = localStorage.getItem('roles');
  term:any

  constructor(
    private employeservice: EmployeService,
    private route: ActivatedRoute,
    private inscriptionservice: InscriptionService,
    private formbuilder: FormBuilder
  ) {
    this.route.params.subscribe((params) => {
      const parametre = params['param'];
      this.idinscription = parametre;
      console.log('Paramètre reçu :', parametre);
    });
  }
  ngOnInit(): void {
    this.ListFunction();
    this.form = this.formbuilder.group({
      objective: ['', Validators.required],
      checkboxes: new FormArray([]),
    });
  }

  //  ListFunction(){
  //  this.employeservice.departmentemployers(this.ide).subscribe(
  //    (res:any)=>{this.listdesemploye=res;console.log("hhhhhhhhh",this.listdesemploye)},
  //   (error:any)=>{console.log("error",error)}
  //  )
  // }
  ListFunction() {
    if (this.role == 'ROLE_CHEF') {
      alert('employer de departement');
      this.employeservice.departmentemployers(this.ide).subscribe(
        (res: any) => {
          this.listdesemploye = res;
          console.log('hhhhhhhhh', this.listdesemploye);
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
          this.listdesemploye = res;
          console.log('hhhhhhhhh', this.listdesemploye);
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    }
  }

  onCheckboxChange(id: any) {
    // This method will be called when the checkbox state changes
    console.log('Checkbox state changed:', this.isChecked);
    // Perform actions based on the checkbox state
    if (this.isChecked) {
      this.add(id); // Call a method when checked
    } else {
      this.delete(id); // Call a method when unchecked
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


}
