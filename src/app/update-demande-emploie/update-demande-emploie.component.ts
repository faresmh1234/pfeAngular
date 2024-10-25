import { Component } from '@angular/core';
import { DemandeEmploieService } from '../service/demande-emploie.service';
import { CondidatService } from '../service/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-update-demande-emploie',
  templateUrl: './update-demande-emploie.component.html',
  styleUrls: ['./update-demande-emploie.component.css']
})
export class UpdateDemandeEmploieComponent {
   onetraining: any;
  listcategories: any;
  listc: any;
  listdep: any;
  iddep: any;
  listpost:any
  idp:any
  unedemande:any
  id=this.activatedrouted.snapshot.params['id']
  constructor(
    private demandeemploieservice: DemandeEmploieService,
    private condidatservice: CondidatService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private postservice:PostService,
    private activatedrouted:ActivatedRoute,
  ) {}

  form: FormGroup;
  idc: any;
  idu = localStorage.getItem('localid');

  ngOnInit(): void {
    this.demande()
    this.getListCondidat();
    this.getListpost()
    this.form = this.formbuilder.group({
      source: ['', Validators.required],
      description: ['', Validators.required],
      etatdemandeemploie: ['', Validators.required],
      date: ['', Validators.required],

      name: ['', Validators.required],
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

  update() {
    console.log('id poste',this.idp)
    console.log('id condidat',this.idc)
    let datajson = {
      source: this.form.value.source,
      date: this.form.value.date,
      description: this.form.value.description,
      etatdemandeemploie: 'NON_SELECTIONNE',
    };

    console.log('resultat', this.form.value);
    this.demandeemploieservice.updatewithcandp(this.id,this.idc,this.idp, datajson).subscribe(
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


demande(){
    this.demandeemploieservice.affiche(this.id).subscribe(
      (res)=>{this.unedemande=res; console.log("employe",res)
      this.form.patchValue({
      etatdemandeemploie:this.unedemande.etatdemandeemploie,
      source:this.unedemande.source,

      description:this.unedemande.description,

     })
     this.idc = this.unedemande.condidat.id ;
     this.idp = this.unedemande.poste.id ;
    },

      (error)=>{console.log(error)})
  }

  creerCondidat() {}

  creerposte() {}

}
