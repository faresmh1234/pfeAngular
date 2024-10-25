import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../service/departement.service';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.css']
})
export class UpdateEmployerComponent implements OnInit {
public value=""
  form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  employe:any
  //pour chercher
  term:any
  listdep:any
  listsite:any
  iddep:any
  idsite:any
  //pour fermer modal

    constructor(
      private employerservice:EmployeService,
      private siteService:SiteService,
      private router:Router,
      private formbuilder:FormBuilder,
      private activatedrouted:ActivatedRoute,
      private departementservice:DepartementService
      ) { }
ngOnInit(): void {
  this.unmploye()
  this.ListdepFunction()
  this.ListsiteFunction()
  this.form=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],

      firstname:['',Validators.required],
      //password:['',Validators.required],
      lastname:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],

    })

}


 unmploye(){
    this.employerservice.Onecategory(this.id).subscribe(
      (res)=>{this.employe=res; console.log("employe",res)
      this.form.patchValue({
      username:this.employe.username,
      email:this.employe.email,
       password:this.employe.password,
      address:this.employe.address,
      // idsite:this.employe.site,
      // iddep:this.employe.departement,
        firstname:this.employe.firstname,
        lastname:this.employe.lastname,
        phone:this.employe.phone,
     })
     this.iddep = this.employe.departement.id ;
     this.idsite = this.employe.site.id ;
    },

      (error)=>{console.log(error)})
  }


  update(){

         console.log("lastname",this.form.value.lastname)
     console.log("firstname",this.form.value.firstname)
     console.log("username",this.form.value.username)
      console.log("phone",this.form.value.phone)
     console.log("email",this.form.value.email)
     console.log("address",this.form.value.address)
       console.log("iddep",this.iddep)
          console.log("idsite",this.idsite)
      console.log("role","employe")

let formdata = new FormData()
     formdata.append("lastname",this.form.value.lastname)
     formdata.append("firstname",this.form.value.firstname)
     formdata.append("username",this.form.value.username)
     formdata.append("phone",this.form.value.phone)
     formdata.append("email",this.form.value.email)
     formdata.append("address",this.form.value.address)
    // formdata.append("role","employe")

    this.employerservice.updatewhithdands(this.id,this.iddep,this.idsite,formdata).subscribe(
     (res:any)=>{this.employe=res;
      console.log("employe",this.employe);
   // this.router.navigateByUrl("/employe")
   alert("sucess")
    },
    (error:any)=>{console.log("error",error)}
   )
    this.router.navigateByUrl("/employe")
   }

  ListdepFunction(){
   this.departementservice.All().subscribe(
     (res:any)=>{this.listdep=res;console.log("liste",this.listdep)},
    (error:any)=>{console.log("error",error)}
   )
  }

  ListsiteFunction(){
   this.siteService.All().subscribe(
     (res:any)=>{this.listsite=res;console.log("listesite",this.listsite)},
    (error:any)=>{console.log("error",error)}
   )
  }


}
