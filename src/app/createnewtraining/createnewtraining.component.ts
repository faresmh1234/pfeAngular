import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../service/training.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-createnewtraining',
  templateUrl: './createnewtraining.component.html',
  styleUrls: ['./createnewtraining.component.css']
})
export class CreatenewtrainingComponent {
  onetraining:any
  listcategories:any
  list:any
listdep:any
iddep:any
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

  ngOnInit(): void {
    this.getList();
    this.getListdep();


 this.form=this.formbuilder.group({
        nom:['',Validators.required],
        prix:['',Validators.required],
        etat:['',Validators.required],
         type:['',Validators.required],
         nbrhour:['',Validators.required],
        datedebut:['',Validators.required],
        datefin:['',Validators.required],
        nomformateur:['',Validators.required],
        description:['',Validators.required],
        name:['',Validators.required],






      })


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
      "etat":"NON_DEBUT",
      "type":"NON_SPECIFIE",
      "nbrhour":this.form.value.nbrhour,
      "datedebut":this.form.value.datedebut,
      "datefin":this.form.value.datefin,
      "description":this.form.value.description,
      "nomformateur":this.form.value.nomformateur,
      "creepar":this.idu,
      "idDepartement":this.iddep
    }

    console.log("resultat",this.form.value)
this.trainingservice.Createwhithcat(this.idcat,datajson).subscribe(
(res:any)=>{console.log("created");
// this.router.navigateByUrl("/training")
},
(error:any)=>{console.log(error)}
)

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
