import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
 id=this.activatedroute.snapshot.params['id'];
  constructor(
    private catservice:CategoryService,
    private activatedroute:ActivatedRoute
  ) { }

  onecat:any

  ngOnInit(): void {
    this.GetOneCat()
  }


  GetOneCat(){
    console.log("this is",this.id);
    this.catservice.Onecategory(this.id).subscribe(
      (res)=>{this.onecat=res; console.log("resulat",res),
       (error:any)=>{console.log("error",error)}
    }
    )

  }
}
