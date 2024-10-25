import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisiteMedicalService } from '../service/visite-medical.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from '../service/societe.service';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-create-visite-medicale',
  templateUrl: './create-visite-medicale.component.html',
  styleUrls: ['./create-visite-medicale.component.css']
})
export class CreateVisiteMedicaleComponent {

   onetraining:any

  list:any

idsociete:any
idsite:any
listsociete:any
listsite:any
  constructor(
      private visiteMedicalService:VisiteMedicalService,
      private societeservice:SocieteService,
      private siteservice:SiteService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,


  ) { }
  form:FormGroup
  idcat:any
  idu=localStorage.getItem("localid")

  ngOnInit(): void {

this.getListsite();
this.getListsociete();

 this.form=this.formbuilder.group({

        "nomprenom":['',Validators.required],
      poste:['',Validators.required],
      ste:['',Validators.required],
      site:['',Validators.required],
      date_embauche:['',Validators.required],
      typesuivi:['',Validators.required],
      typeVisite:['',Validators.required],
      date_visite:['',Validators.required],
      arenouveleavant:['',Validators.required],
      commentaire:['',Validators.required],
      observation:['',Validators.required],






      })


  }





  create(){
    let datajson ={

      "nomprenom":this.form.value.nomprenom,
      "poste":this.form.value.poste,
      "ste":this.form.value.ste,
      "site":this.form.value.site,
      "date_embauche":this.form.value.date_embauche,
      "typesuivi":this.form.value.typesuivi,
      "typeVisite":this.form.value.typeVisite,
      "date_visite":this.form.value.date_visite,
      "arenouveleavant":this.form.value.arenouveleavant,
      "commentaire":this.form.value.commentaire,
      "observation":this.form.value.observation
    }

    console.log("resultat",this.form.value)
this.visiteMedicalService.Create(datajson).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/visitemedicale")},
(error:any)=>{console.log(error)}
)

  }


getListsociete(){
  this.societeservice.All().subscribe(
(res:any)=>{this.listsociete=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

getListsite(){
  this.siteservice.All().subscribe(
(res:any)=>{this.listsite=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}



}
