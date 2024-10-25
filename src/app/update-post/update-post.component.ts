import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
 form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  post:any
  //pour chercher
  term:any
  listdep:any

  iddep:any

  //pour fermer modal

    constructor(
      private postservice:PostService,
      private router:Router,
      private formbuilder:FormBuilder,
      private activatedrouted:ActivatedRoute,
      private departementservice:DepartementService
      ) { }
ngOnInit(): void {
  this.unpost()
  this.ListdepFunction()

  this.form=this.formbuilder.group({
      name:['',Validators.required],
      status:['',Validators.required],



    })

}


 unpost(){
    this.postservice.One(this.id).subscribe(
      (res)=>{this.post=res; console.log("employe",res)
      this.form.patchValue({
      name:this.post.name,
      status:this.post.status,

     })
     this.iddep = this.post.departementp.id ;

    },

      (error)=>{console.log(error)})
  }


  update(){

let datajson = {
      name: this.form.value.name,
      status: this.form.value.status,

    };
    this.postservice.modifypwithd(this.id,this.iddep,datajson).subscribe(
     (res:any)=>{console.log("post",this.post);
    this.router.navigateByUrl("/post")
    },
    (error:any)=>{console.log("error",error)}
   )
   }

  ListdepFunction(){
   this.departementservice.All().subscribe(
     (res:any)=>{this.listdep=res;console.log("liste",this.listdep)},
    (error:any)=>{console.log("error",error)}
   )
  }

  creerdep(){
         console.log("resss",this.form.value)
this.departementservice.Create(this.form.value).subscribe(
(res:any)=>{console.log("created");
this.ListdepFunction()
},
(error:any)=>{console.log(error)}
)
  }

}
