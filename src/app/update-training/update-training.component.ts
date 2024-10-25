import { Component } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css'],
})
export class UpdateTrainingComponent {
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
  constructor(
    private trainingservice: TrainingService,
    private categoryservice: CategoryService,
    private router: Router,
    private formbuilder: FormBuilder,
    private activatedrouted: ActivatedRoute,
    private depservice: DepartementService
  ) {}
  ngOnInit(): void {
    this.uneformation();
    this.ListcatFunction();
    this.ListdepFunction();

    this.form = this.formbuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required],
      type: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required],
      nbrhour: ['', Validators.required],
      nomformateur: ['', Validators.required],
      departement: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }



  uneformation() {
    this.trainingservice.One(this.id).subscribe(
      (res) => {
        this.training = res;
        console.log('formation', res);
        this.form.patchValue({
          nom: this.training.nom,
          description: this.training.description,
          etat: this.training.etat,
          type: this.training.type,
          nbrhour: this.training.nbrhour,
          nomformateur: this.training.nomformateur,
          prix: this.training.prix,


        });

        this.departement=this.training.idDepartement
        this.categorie = this.training.categorie
        this.idcat=this.categorie.id
        this.iddep = this.training.idDepartement

        console.log("categorie",this.categorie)
        let dated=new Date(this.training.datedebut);
        const month = String(dated.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(dated.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = dated.getFullYear();
        console.log("month",month)
        console.log("day",day)
        console.log("year",year)

let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
this.datedebut =year+'-'+month+'-'+day
console.log("datedebut",this.datedebut)

        this.form.get('datedebut').setValue(this.datedebut);
        console.log(this.datedebut)

        let datef=new Date(this.training.datefin);

        const month1 = String(datef.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day1 = String(datef.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year1 = datef.getFullYear();
        console.log("month1",month1)
        console.log("day1",day1)
        console.log("year1",year1)

let formatter1 = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
this.datefin =year1+'-'+month1+'-'+day1


        this.form.get('datefin').setValue(this.datefin);
        console.log("datefin ",this.datefin)
        this.departementfunction()

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

    let datajson = {
      nom: this.form.value.nom,
      etat: this.form.value.etat,
      type: this.form.value.type,
      nbrhour: this.form.value.nbrhour,
      datedebut: this.form.value.datedebut,
      datefin: this.form.value.datefin,
      description: this.form.value.description,
      nomformateur: this.form.value.nomformateur,
      creepar: this.idu,
      idDepartement: this.iddep,
      prix: this.form.value.prix,
    };
    console.log('data json', datajson);

    this.trainingservice
      .updatewhithcat(this.id, this.idcat, datajson)
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

  ListcatFunction() {
    this.categoryservice.AllCategories().subscribe(
      (res: any) => {
        this.listcat = res;
        console.log('listeCategory', this.listcat);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListdepFunction() {
    this.depservice.All().subscribe(
      (res: any) => {
        this.listdep = res;
        console.log('listeCategory', this.listdep);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  departementfunction(){
    console.log("this is",this.id);
    this.depservice.One(this.training.idDepartement).subscribe(
      (res)=>{this.dep=res; console.log("deppppppp",res);

      //  (error:any)=>{console.log("error",error)}
    }
    )
  }
}
