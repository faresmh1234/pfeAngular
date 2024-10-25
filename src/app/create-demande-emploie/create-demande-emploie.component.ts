import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeEmploieService } from '../service/demande-emploie.service';
import { CondidatService } from '../service/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-create-demande-emploie',
  templateUrl: './create-demande-emploie.component.html',
  styleUrls: ['./create-demande-emploie.component.css'],
})
export class CreateDemandeEmploieComponent {
  onetraining: any;
  listcategories: any;
  listc: any;
  listdep: any;
  iddep: any;
  listpost:any
  idp:any
  fileToUpload: Array<File> = [];
  constructor(
    private departementservice:DepartementService,
    private demandeemploieservice: DemandeEmploieService,
    private condidatservice: CondidatService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private postservice:PostService
  ) {}

  form: FormGroup;
  idc: any;
  idu = localStorage.getItem('localid');

  ngOnInit(): void {
    this.getListdep()
    this.getListCondidat();
    this.getListpost()
    this.form = this.formbuilder.group({
      source: ['', Validators.required],
      description: ['', Validators.required],

      date: ['', Validators.required],

      name: ['', Validators.required],
      namep:['',Validators.required],
        status:['',Validators.required],
        nom: ['', Validators.required],
        cnom: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      niveauEtude: ['', Validators.required],
    });
  }
  getListCondidat() {
    this.condidatservice.All().subscribe(
      (res: any) => {
        this.listc = res;
        console.log('liste condidat ', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  create() {
    console.log('id poste',this.idp)
    console.log('id condidat',this.idc)
    let datajson = {
      source: this.form.value.source,
      date: this.form.value.date,
      description: this.form.value.description,
      etatdemandeemploie: 'NON_SELECTIONNE',
    };
    console.log("source",this.form.value.source)
    console.log("date",this.form.value.date)
    console.log("description",this.form.value.description)
    console.log("etatdemandeemploie",this.form.value.etatdemandeemploie)
    let formdata=new FormData()
    formdata.append("source",this.form.value.source)
    formdata.append("date",this.form.value.date)
    formdata.append("description",this.form.value.description)
    formdata.append("etatdemandeemploie",'NON_SELECTIONNE')
    // formdata.append("file",this.form.value.this.fileToUpload[0])
    formdata.append("file",this.fileToUpload[0])
    console.log('resultat', datajson);
    this.demandeemploieservice.savewithcandp(this.idc,this.idp, formdata).subscribe(
      (res: any) => {
        console.log('created');
        this.router.navigateByUrl('/demandeemploie');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getListpost() {
    this.postservice.All().subscribe(
      (res: any) => {
        this.listpost = res;
        console.log('liste poste ', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  creerCondidat() {}

  createPoste(){
    let datajson ={
      "name":this.form.value.namep,
      "status":this.form.value.status

    }

    console.log("resultat",this.form.value)
this.postservice.savewithd(this.iddep,datajson).subscribe(
(res:any)=>{console.log("created");
this.getListpost()
},
(error:any)=>{console.log(error)}
)

  }

  getListdep() {
    this.departementservice.All().subscribe(
      (res: any) => {
        this.listdep = res;
        console.log('liste poste ', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  createCondidat(){
       let datajson = {
      nom: this.form.value.cnom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      tel: this.form.value.tel,
      niveauEtude: this.form.value.niveauEtude,
      cin: this.form.value.cin,
      creepar: this.idu,
    };

    console.log("resultat",datajson)
this.condidatservice.Create(datajson).subscribe(
(res:any)=>{console.log("created");
this.getListCondidat()
},
(error:any)=>{console.log(error)}
)

  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

}


