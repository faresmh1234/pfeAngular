import { Component, OnInit  } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { DepartementService } from '../service/departement.service';


@Component({
  selector: 'app-createtraining',
  templateUrl: './createtraining.component.html',
  styleUrls: ['./createtraining.component.css']
})
export class CreatetrainingComponent implements OnInit{
  onetraining:any
  listcategories:any
  list:any
listdep:any
iddep:any
datedebut:any
datefin:any

  constructor(
      private trainingservice:TrainingService,
      private categoruservice:CategoryService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private catservice:CategoryService,
      private depservice:DepartementService
  ) { }
  form:FormGroup
  idcat:any
  idu=localStorage.getItem("localid")

//   ngOnInit(): void {
//     this.getList();
//     this.getListdep();


//  this.form=this.formbuilder.group({
//         nom:['',Validators.required],
//         prix:['',Validators.required],
//         etat:['',Validators.required],
//          type:['',Validators.required],
//          nbrhour:['',Validators.required],
//         datedebut:['',Validators.required],
//         datefin:['',Validators.required],
//         nomformateur:['',Validators.required],
//         description:['',Validators.required],
//         name:['',Validators.required],






//       })


//   }


ngOnInit(): void {
    this.getList();
    this.getListdep();

    this.form=this.formbuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      etat: ['', Validators.required],
      type: ['', Validators.required],
      nbrhour: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required],
      nomformateur: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
    }, { validator: this.dateRangeValidator });
     // Apply custom validation
this.datedebut =this.form.value.datedebut
this.datefin = this.form.value.datefin
  }

dateRangeValidator(group: FormGroup) {
    const datedebut = group.get('datedebut')?.value;
    const datefin = group.get('datefin')?.value;

    return datedebut && datefin && datedebut < datefin ? null : { dateRangeInvalid: true };
  }

  // Custom validation function for date comparison
  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const datedebut = control.get('datedebut').value;
    const datefin = control.get('datefin').value;

    if (datedebut && datefin && datedebut > datefin) {
      return { datesInvalid: true }; // Return an error object
    } else {
      return null; // No error
    }
  }


getList(){
  this.categoruservice.AllCategories().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){
    let datajson ={
      "nom":this.form.value.nom,
      "prix":this.form.value.prix,
      "etat":this.form.value.etat,
      "type":this.form.value.type,
      "nbrhour":this.form.value.nbrhour,
      "datedebut":this.form.value.datedebut,
      "datefin":this.form.value.datefin,
      "description":this.form.value.description,
      "nomformateur":this.form.value.nomformateur,
      "creepar":this.idu,
      "idDepartement":this.iddep
    }

    console.log("resultat",this.form.value)
    if (this.form.value.datefin>this.form.value.datedebut){
this.trainingservice.Createwhithcat(this.idcat,datajson).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/training")},
(error:any)=>{console.log(error)}
)
}
else{ console.log("error")
  const messageDiv = document.getElementById('message');
    messageDiv.textContent = "la date fin doit étre superieur a la date debut";
}
  }

  creerCategory(){
    console.log("resss",this.form.value)
this.catservice.CreateCategory(this.form.value).subscribe(
(res:any)=>{console.log("created");
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


}
