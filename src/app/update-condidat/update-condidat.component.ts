import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CondidatService } from '../service/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-update-condidat',
  templateUrl: './update-condidat.component.html',
  styleUrls: ['./update-condidat.component.css']
})
export class UpdateCondidatComponent {
  public value=""
  form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  condidat:any
  //pour chercher
  term:any


  //pour fermer modal

    constructor(
      private condidatservice:CondidatService,
      private router:Router,
      private formbuilder:FormBuilder,
      private activatedrouted:ActivatedRoute,
      private departementservice:DepartementService
      ) { }
ngOnInit(): void {
  this.unmploye()


  this.form=this.formbuilder.group({
      nom:['',Validators.required],
      email:['',Validators.required],

      prenom:['',Validators.required],
      //password:['',Validators.required],
      niveauEtude:['',Validators.required],
      tel:['',Validators.required],


    })

}


 unmploye(){
    this.condidatservice.One(this.id).subscribe(
      (res)=>{this.condidat=res; console.log("employe",res)
      this.form.patchValue({
      nom:this.condidat.nom,
      email:this.condidat.email,
       prenom:this.condidat.prenom,
        niveauEtude:this.condidat.niveauEtude,
        tel:this.condidat.tel,
     })
    },

      (error)=>{console.log(error)})
  }


  update(){
let formdata = new FormData()
     formdata.append("lastname",this.form.value.lastname),
     formdata.append("firstname",this.form.value.firstname),
     formdata.append("username",this.form.value.username),
     formdata.append("phone",this.form.value.phone),
     formdata.append("email",this.form.value.email),
     formdata.append("address",this.form.value.address)

     let datajson = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      niveauEtude: this.form.value.niveauEtude,
      tel: this.form.value.tel,


    };

    this.condidatservice.modify(this.id,datajson).subscribe(
     (res:any)=>{this.condidat=res;console.log("condidat",this.condidat);
    this.router.navigateByUrl("/condidat")
    },
    (error:any)=>{console.log("error",error)}
   )
   }





}
