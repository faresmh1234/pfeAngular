import { Component } from '@angular/core';
import { CachechauffeurService } from '../service/cachechauffeur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../service/departement.service';
import { SiteService } from '../service/site.service';
import { SocieteService } from '../service/societe.service';

@Component({
  selector: 'app-update-cache-chauffeur',
  templateUrl: './update-cache-chauffeur.component.html',
  styleUrls: ['./update-cache-chauffeur.component.css']
})
export class UpdateCacheChauffeurComponent {
listsite:any
listsociete:any
  public value=""
  form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  chauffeur:any
  //pour chercher
  term:any
  idu = localStorage.getItem('localid');


  //pour fermer modal

    constructor(
      private cachechauffeurservice:CachechauffeurService,
      private router:Router,
      private formbuilder:FormBuilder,
      private activatedrouted:ActivatedRoute,
      private departementservice:DepartementService,
      private siteservice:SiteService,
      private SocieteService:SocieteService
      ) { }
ngOnInit(): void {
  this.unmploye()
  this.ListsiteFunction();
  this.ListsocieteFunction();


  this.form=this.formbuilder.group({
            nomchauffeur: ['', Validators.required],
      prenom_chauffeur: ['', Validators.required],
      remarque: ['', Validators.required],
      matricule: ['', Validators.required],
      identifiantcache: ['', Validators.required],
      nom_site: ['', Validators.required],
      nom_societe: ['', Validators.required],


    })

}


 unmploye(){
    this.cachechauffeurservice.One(this.id).subscribe(
      (res)=>{this.chauffeur=res; console.log("employe",res)
      this.form.patchValue({
      nomchauffeur:this.chauffeur.nomchauffeur,
      remarque:this.chauffeur.remarque,
       prenom_chauffeur:this.chauffeur.prenom_chauffeur,
        matricule:this.chauffeur.matricule,
        nom_site:this.chauffeur.nom_site,
        nom_societe:this.chauffeur.nom_societe
     })
    },

      (error)=>{console.log(error)})
  }


  update(){
// let formdata = new FormData()
//      formdata.append("lastname",this.form.value.lastname),
//      formdata.append("firstname",this.form.value.firstname),
//      formdata.append("username",this.form.value.username),
//      formdata.append("phone",this.form.value.phone),
//      formdata.append("email",this.form.value.email),
//      formdata.append("address",this.form.value.address)
let datajson = {
      nomchauffeur: this.form.value.nomchauffeur,
      prenom_chauffeur: this.form.value.prenom_chauffeur,
      remarque: this.form.value.remarque,
      matricule: this.form.value.matricule,
      identifiantcache: this.form.value.identifiantcache,
      nom_site: this.form.value.nom_site,
      nom_societe:this.form.value.nom_societe,
      modifie_par: this.idu,
    };

    this.cachechauffeurservice.modify(this.id,datajson).subscribe(
     (res:any)=>{this.chauffeur=res;console.log("condidat",this.chauffeur);
    this.router.navigateByUrl("/cachechauffeur")
    },
    (error:any)=>{console.log("error",error)}
   )
   }

   ListsiteFunction() {
    this.siteservice.All().subscribe(
      (res: any) => {
        this.listsite = res;
        console.log('listesite', this.listsite);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListsocieteFunction() {
    this.SocieteService.All().subscribe(
      (res: any) => {
        this.listsociete = res;
        console.log('listsociete', this.listsociete);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }





}
