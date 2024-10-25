import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisiteMedicalService } from '../service/visite-medical.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../service/site.service';
import { SocieteService } from '../service/societe.service';

@Component({
  selector: 'app-update-visite-medicale',
  templateUrl: './update-visite-medicale.component.html',
  styleUrls: ['./update-visite-medicale.component.css']
})
export class UpdateVisiteMedicaleComponent {
  public value = '';
  form: FormGroup;
  id = this.activatedrouted.snapshot.params['id'];
  training: any;
  //pour chercher
  term: any;
  dateembauche:any
  listcat: any;
  datedebut: any
  datefin: any
  idcat: any;
  listdep: any;
  idu = localStorage.getItem('localid');
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  departement: any
  categorie: any
  dep: any
  iddep: any
  eid: any
  sid: any
  iid: any
  departementid: any
  siteid: any
  listdepartement: any
  listsite: any
  liststagiaire: any
  Listencadrant: any
  listinstitut: any
  visitemedicale: any
  listsociete: any
  datevisite:any
  constructor(
    private visiteMedicalService: VisiteMedicalService,

    private router: Router,
    private formbuilder: FormBuilder,
    private activatedrouted: ActivatedRoute,
    private siteservice: SiteService,
    private societeservice: SocieteService


  ) { }
  ngOnInit(): void {
    this.unevisitemedicale();
    // this.getList();
    // this.getListinstitut();
    // this.ListencadrantFunction();
    this.ListsiteFunction();
    this.ListsocieteFunction();




    this.form = this.formbuilder.group({

      "nomprenom": ['', Validators.required],
      poste: ['', Validators.required],
      ste: ['', Validators.required],
      site: ['', Validators.required],
      date_embauche: ['', Validators.required],
      typesuivi: ['', Validators.required],
      typeVisite: ['', Validators.required],
      date_visite: ['', Validators.required],
      arenouveleavant: ['', Validators.required],
      commentaire: ['', Validators.required],
      observation: ['', Validators.required],






    })
  }



  unevisitemedicale() {
    this.visiteMedicalService.One(this.id).subscribe(
      (res) => {
        this.visitemedicale = res;
        console.log('formation', res);
        this.form.patchValue({
          // nom_stage: this.stage.nom,
          // description_stage: this.stage.description_stage,
          // etat: this.stage.etat,
          nomprenom:this.visitemedicale.nomprenom,
           poste: this.visitemedicale.poste,
      ste: this.visitemedicale.ste,
      site: this.visitemedicale.site,
      typesuivi: this.visitemedicale.typesuivi,
      typeVisite: this.visitemedicale.typeVisite,
     date_visite: this.visitemedicale.date_visite,
      arenouveleavant: this.visitemedicale.arenouveleavant,
      commentaire: this.visitemedicale.commentaire,
      observation: this.visitemedicale.observation


        });


        // this.iid = this.stage.institut.id
        // this.sid = this.stage.stagiaire.id
        // this.eid = this.stage.encadrant.id

        console.log("date embauche",this.visitemedicale.date_embauche)
        let dated = new Date(this.visitemedicale.date_embauche);
        const month = String(dated.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(dated.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = dated.getFullYear();
        console.log("month", month)
        console.log("day", day)
        console.log("year", year)

        let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
        this.dateembauche = year + '-' + month + '-' + day
        console.log("datedebut", this.dateembauche)

        this.form.get('date_embauche').setValue(this.dateembauche);
        console.log("dateembauche",this.dateembauche)

        let datef = new Date(this.visitemedicale.date_visite);

        const month1 = String(datef.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day1 = String(datef.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year1 = datef.getFullYear();
        console.log("month1", month1)
        console.log("day1", day1)
        console.log("year1", year1)

        let formatter1 = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
        this.datevisite = year1 + '-' + month1 + '-' + day1


        this.form.get('date_visite').setValue(this.datevisite);
        console.log("datefin ", this.datefin)


      },

      (error) => {
        console.log("this erreur", error);
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

    let datajson = {

      "nomprenom": this.form.value.nomprenom,
      "poste": this.form.value.poste,
      "ste": this.form.value.ste,
      "site": this.form.value.site,
      "date_embauche": this.form.value.date_embauche,
      "typesuivi": this.form.value.typesuivi,
      "typeVisite": this.form.value.typeVisite,
      "date_visite": this.form.value.date_visite,
      "arenouveleavant": this.form.value.arenouveleavant,
      "commentaire": this.form.value.commentaire,
      "observation": this.form.value.observation
    }
    console.log('data json', datajson);

    this.visiteMedicalService
      .modify(this.id, datajson)
      .subscribe(
        (res: any) => {
          this.training = res;
          console.log('DATABASE', this.training);
          this.router.navigateByUrl('/visitemedicale');
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

  ListsiteFunction() {
    this.siteservice.All().subscribe(
      (res: any) => {
        this.listsite = res;
        console.log('listeCategory', this.listsite);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListsocieteFunction() {
    this.societeservice.All().subscribe(
      (res: any) => {
        this.listsociete = res;
        console.log('listeCategory', this.listsociete);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  // getencadrantfunction(){
  //   console.log("this is",this.id);
  //   this.employeservice.All().subscribe(
  //     (res)=>{this.dep=res; console.log("deppppppp",res);

  //     //  (error:any)=>{console.log("error",error)}
  //   }
  //   )
  // }

  // creerInstitut(){
  //   let datajson ={

  //       "nom":this.form.value.nom_institut,
  //       "gouvernorat":this.form.value.gouvernorat,



  //     }
  //     console.log("data json  institut ",datajson);

  //     this.institutservice.Create(datajson).subscribe(
  // (res:any)=>{
  //   console.log(res);
  //   console.log("created successfuly");
  //   this.getListinstitut();
  // },
  // (error:any)=>{
  //   console.log(error)
  //   console.log("erreur")
  // }
  // )

  // }
  // creerstagiaire(){
  //   let datajson ={

  //       "genre":this.form.value.genre_stagiaire,
  //       "nom":this.form.value.nom_stagiaire,
  //       "prenom":this.form.value.prenom_stagiaire,
  //       "email":this.form.value.email_stagiaire,
  //       "tel":this.form.value.tel_stagiaire,
  //       "cin":this.form.value.cin_stagiaire,



  //     }
  //     console.log("data json  institut ",datajson);

  //     this.stagiaireservice.save(this.siteid,this.departementid,datajson).subscribe(
  // (res:any)=>{
  //   console.log(res);
  //   console.log("created successfuly");
  //   this.getList();
  // },
  // (error:any)=>{
  //   console.log(error)
  //   console.log("erreur")
  // }
  // )

  // }


  // getList(){
  //   this.stagiaireservice.All().subscribe(
  // (res:any)=>{this.liststagiaire=res;console.log("crealist cat on trainingted",res)},

  // (error:any)=>{console.log(error)}

  //   )
  // }
  //   getListinstitut(){
  //   this.institutservice.All().subscribe(
  // (res:any)=>{this.listinstitut=res;console.log("crealist cat on trainingted",res)},

  // (error:any)=>{console.log(error)}

  //   )
  // }

  // ListencadrantFunction() {
  //     this.employeservice.All().subscribe(
  //       (res: any) => {
  //         this.Listencadrant = res;
  //         console.log('liste encadrant', this.Listencadrant);
  //       },
  //       (error: any) => {
  //         console.log('error', error);
  //       }
  //     );
  //   }
}
