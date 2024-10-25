import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {



  onecat:any
  constructor(
      private catservice:CategoryService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router
  ) { }
  form:FormGroup

  ngOnInit(): void {

 this.form=this.formbuilder.group({
        name:['',Validators.required]})
  }



  creerCategory(){
    console.log("resss",this.form.value)
this.catservice.CreateCategory(this.form.value).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/category")},
(error:any)=>{console.log(error)}
)

  }

}

