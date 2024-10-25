import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StageService } from '../service/stage.service';
import { InstitutService } from '../service/institut.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../service/stagiaire.service';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-updatestage',
  templateUrl: './updatestage.component.html',
  styleUrls: ['./updatestage.component.css']
})
export class UpdatestageComponent {
public value = '';
  form: FormGroup;
  id = this.activatedrouted.snapshot.params['id'];
  training: any;
  //pour chercher
  term: any;
  listcat: any;
  datedebut:any
  datefin:any
  idcat: any;
  listdep: any;
  idu = localStorage.getItem('localid');
  month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  departement:any
  categorie:any
  dep:any
  iddep:any
  eid:any
  sid:any
  iid:any
  departementid:any
  siteid:any
  listdepartement:any
  listsite:any
  liststagiaire:any
  Listencadrant:any
  listinstitut:any
  stage:any
  constructor(
    private stageservice: StageService,
    private institutservice: InstitutService,
    private router: Router,
    private formbuilder: FormBuilder,
    private activatedrouted: ActivatedRoute,
    private stagiaireservice:StagiaireService,
    private employeservice:EmployeService

  ) {}
  ngOnInit(): void {
    this.unstage();
    this.getList();
    this.getListinstitut();
    this.ListencadrantFunction();




    this.form = this.formbuilder.group({
      nom_institut: ['', Validators.required],
      email_stagiaire: ['', Validators.required],
      etat: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      nom_stagiaire: ['', Validators.required],
      cin_stagiaire: ['', Validators.required],
      tel_stagiaire: ['', Validators.required],
      description_stage: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      genre_stagiaire: ['', Validators.required],
      prenom_stagiaire: ['', Validators.required],
      nom: ['', Validators.required],
    });
  }



  unstage() {
    this.stageservice.One(this.id).subscribe(
      (res) => {
        this.stage = res;
        console.log('formation', res);
        this.form.patchValue({
          nom_stage: this.stage.nom,
          description_stage: this.stage.description_stage,
          etat: this.stage.etat,


        });


        this.iid=this.stage.institut.id
        this.sid = this.stage.stagiaire.id
        this.eid=this.stage.encadrant.id


        let dated=new Date(this.stage.date_debut);
        const month = String(dated.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(dated.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = dated.getFullYear();
        console.log("month",month)
        console.log("day",day)
        console.log("year",year)

let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
this.datedebut =year+'-'+month+'-'+day
console.log("datedebut",this.datedebut)

        this.form.get('date_debut').setValue(this.datedebut);
        console.log(this.datedebut)

        let datef=new Date(this.stage.date_fin);

        const month1 = String(datef.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day1 = String(datef.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year1 = datef.getFullYear();
        console.log("month1",month1)
        console.log("day1",day1)
        console.log("year1",year1)

let formatter1 = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
this.datefin =year1+'-'+month1+'-'+day1


        this.form.get('date_fin').setValue(this.datefin);
        console.log("datefin ",this.datefin)


      },

      (error) => {
        console.log("this erreur",error);
      }
    );
  }

  update() {
    let formdata = new FormData();
    formdata.append('nom', this.form.value.nom),
      formdata.append('description', this.form.value.description),
      formdata.append('etat', this.form.value.etat),
      formdata.append('type', this.form.value.type),
      formdata.append('datedebut', this.form.value.datedebut),
      formdata.append('datefin', this.form.value.datefin),
      formdata.append('nbrhour', this.form.value.nbrhour),
      formdata.append('nomformateur', this.form.value.nomformateur),
      formdata.append('idDepartement', this.form.value.departement);

    let datajson ={

      "date_debut":this.form.value.date_debut,
      "date_fin":this.form.value.date_fin,
      "description_stage":this.form.value.description_stage,
      "etat":this.form.value.etat,

    }
    console.log('data json', datajson);

    this.stageservice
      .modify(this.id, this.sid,this.eid,this.iid, datajson)
      .subscribe(
        (res: any) => {
          this.training = res;
          console.log('DATABASE', this.training);
          this.router.navigateByUrl('/training');
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

  ListstagiaireFunction() {
    this.stagiaireservice.All().subscribe(
      (res: any) => {
        this.listcat = res;
        console.log('listeCategory', this.listcat);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListinstitutFunction() {
    this.institutservice.All().subscribe(
      (res: any) => {
        this.listdep = res;
        console.log('listeCategory', this.listdep);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  getencadrantfunction(){
    console.log("this is",this.id);
    this.employeservice.All().subscribe(
      (res)=>{this.dep=res; console.log("deppppppp",res);

      //  (error:any)=>{console.log("error",error)}
    }
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


getList(){
  this.stagiaireservice.All().subscribe(
(res:any)=>{this.liststagiaire=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}
  getListinstitut(){
  this.institutservice.All().subscribe(
(res:any)=>{this.listinstitut=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

ListencadrantFunction() {
    this.employeservice.All().subscribe(
      (res: any) => {
        this.Listencadrant = res;
        console.log('liste encadrant', this.Listencadrant);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
