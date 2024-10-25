import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../service/stagiaire.service';
import { SiteService } from '../service/site.service';
import { DepartementService } from '../service/departement.service';
import { InstitutService } from '../service/institut.service';

@Component({
  selector: 'app-create-stagiaire',
  templateUrl: './create-stagiaire.component.html',
  styleUrls: ['./create-stagiaire.component.css']
})
export class CreateStagiaireComponent implements OnInit {
siteid:any
departementid:any
listdepartement:any
listsite:any
  constructor(

      private institutservice:InstitutService,
      private stagiaireservice:StagiaireService,

    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private departementservice:DepartementService,
      private siteservice:SiteService,

  ) { }
  form:FormGroup
  ngOnInit(): void {
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
  this.router.navigateByUrl("/stagiaire")

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

}
