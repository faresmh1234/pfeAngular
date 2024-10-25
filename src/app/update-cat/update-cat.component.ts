import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  id=this.activatedroute.snapshot.params['id']
  onecat:any
  constructor(
      private catservice:CategoryService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router
  ) { }
  form:FormGroup

  ngOnInit(): void {
this.GetOneCat();
 this.form=this.formbuilder.group({
        name:['',Validators.required]})
  }

   GetOneCat(){
    console.log("this is",this.id);
    this.catservice.Onecategory(this.id).subscribe(
      (res)=>{this.onecat=res; console.log("resulat",res);
      this.form.patchValue({name:this.onecat.name}),




       (error:any)=>{console.log("error",error)}
    }
    )

  }

  modifierCategory(){
this.catservice.modifyCategory(this.id,this.form.value).subscribe(
(res:any)=>{console.log("updated")
this.router.navigateByUrl("/category")},
(error:any)=>{console.log(error)}
)

  }

}
