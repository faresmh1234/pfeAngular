import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StageService } from '../service/stage.service';
import { InstitutService } from '../service/institut.service';
import { StagiaireService } from '../service/stagiaire.service';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent {
  listinstitut:any
liststagiaire:any
Listencadrant:any
listdepartement:any
listsite:any
  constructor(
      private stageservice:StageService,
      private institutservice:InstitutService,
      private stagiaireservice:StagiaireService,
      private employeservice:EmployeService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private departementservice:DepartementService,
      private siteservice:SiteService,

  ) { }
  form:FormGroup

  idu=localStorage.getItem("localid")
  sid:any
  eid:any
  iid:any
  departementid:any
  siteid:any
  ngOnInit(): void {
    this.getList();
    this.getListinstitut();
    this.getListencadrant();
    this.getListDepartement();
    this.getListSite();


 this.form=this.formbuilder.group({

        etat:['',Validators.required],
        date_debut:['',Validators.required],
        date_fin:['',Validators.required],
        description_stage:['',Validators.required],
        nom:['',Validators.required],
        name:['',Validators.required],
        gouvernorat:['',Validators.required],
        nom_institut:['',Validators.required],
        nom_stagiaire:['',Validators.required],
        prenom_stagiaire:['',Validators.required],
        genre_stagiaire:['',Validators.required],
        email_stagiaire:['',Validators.required],
        tel_stagiaire:['',Validators.required],
        cin_stagiaire:['',Validators.required],







      })


  }
getList(){
  this.stagiaireservice.All().subscribe(
(res:any)=>{this.liststagiaire=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){
    let datajson ={

      "date_debut":this.form.value.date_debut,
      "date_fin":this.form.value.date_fin,
      "description_stage":this.form.value.description_stage,
      "etat":this.form.value.etat,

    }
    console.log(this.form.value.date_debut,this.form.value.datefin)
if (this.form.value.date_fin>this.form.value.date_debut){

    console.log("resultat",this.form.value)
this.stageservice.save(this.sid,this.eid,this.iid,datajson).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/stage")},
(error:any)=>{console.log(error)}
)
}else{
  console.log("error date")
  const messageDiv = document.getElementById('dateeror');
    messageDiv.textContent = "la date fin doit étre superieur a la date debut";
}
  }

//   creerCategory(){
//     console.log("resss",this.form.value)
// this.stagiaireservice.CreateCategory(this.form.value).subscribe(
// (res:any)=>{console.log("created");
// this.getList();
// },
// (error:any)=>{console.log(error)}
// )

//   }

  getListinstitut(){
  this.institutservice.All().subscribe(
(res:any)=>{this.listinstitut=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}


getListencadrant(){
  this.employeservice.All().subscribe(
(res:any)=>{this.Listencadrant=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

creerInstitut(){
  let datajson ={

      "nom":this.form.value.nom_institut,
      "gouvernorat":this.form.value.gouvernorat,



    }
    console.log("data json  institut ",datajson);

    this.institutservice.Create(datajson).subscribe(
(res:any)=>{
  console.log(res);
  console.log("created successfuly");
  this.getListinstitut();
},
(error:any)=>{
  console.log(error)
  console.log("erreur")
}
)

}

getListDepartement(){
  this.departementservice.All().subscribe(
(res:any)=>{this.listdepartement=res;console.log("list departement",res)},

(error:any)=>{console.log(error)}

  )
}

getListSite(){
  this.siteservice.All().subscribe(
(res:any)=>{this.listsite=res;console.log("list site",res)},

(error:any)=>{console.log(error)}

  )
}

creerstagiaire(){
  let datajson ={

      "genre":this.form.value.genre_stagiaire,
      "nom":this.form.value.nom_stagiaire,
      "prenom":this.form.value.prenom_stagiaire,
      "email":this.form.value.email_stagiaire,
      "tel":this.form.value.tel_stagiaire,
      "cin":this.form.value.cin_stagiaire,



    }
    console.log("data json  institut ",datajson);

    this.stagiaireservice.save(this.siteid,this.departementid,datajson).subscribe(
(res:any)=>{
  console.log(res);
  console.log("created successfuly");
  this.getList();
},
(error:any)=>{
  console.log(error)
  console.log("erreur")
}
)

}

}
