import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
 one:any

  list:any
listdep:any
iddep:any

  constructor(
      private postservice:PostService,
    private depservice:DepartementService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
  ) { }
  form:FormGroup

  idu=localStorage.getItem("localid")

  ngOnInit(): void {

    this.getListdep();


 this.form=this.formbuilder.group({
        name:['',Validators.required],
        status:['',Validators.required],
        dname:['',Validators.required],


      })



  }





  create(){
    let datajson ={
      "name":this.form.value.name,
      "status":this.form.value.status

    }

    console.log("resultat",this.form.value)
this.postservice.savewithd(this.iddep,datajson).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/post")},
(error:any)=>{console.log(error)}
)

  }



  getListdep(){
  this.depservice.All().subscribe(
(res:any)=>{this.listdep=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

creerdep(){
     console.log("resss",this.form.value)
this.depservice.Create(this.form.value).subscribe(
(res:any)=>{console.log("created");
this.getListdep()
},
(error:any)=>{console.log(error)}
)

}



}
