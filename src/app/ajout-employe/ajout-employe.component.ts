import { Component, OnInit  } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../service/departement.service';
import { SiteService } from '../service/site.service';


@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit{
  one:any
  listdepartement:any
  list:any
  listsite:any
  constructor(
      private employeservice:EmployeService,
      private siteservice:SiteService,
      private departementservice:DepartementService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router
  ) { }
  form:FormGroup
  iddep:any
  idsite:any

  ngOnInit(): void {
    this.getList();


 this.form=this.formbuilder.group({
        username:['',Validators.required],
        email:['',Validators.required],
        address:['',Validators.required],
        phone:['',Validators.required],
      })


  }
getList(){
  this.departementservice.All().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){

    console.log("resultat",this.form.value)
this.employeservice.signupemployer(this.iddep,this.idsite,this.form.value).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/employe")},
(error:any)=>{console.log(error)}
)

  }


  ListsiteFunction(){
   this.siteservice.All().subscribe(
     (res:any)=>{this.listsite=res;console.log("listesite",this.listsite)},
    (error:any)=>{console.log("error",error)}
   )
  }

}
