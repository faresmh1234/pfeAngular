import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DepartementService } from '../service/departement.service';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-department-training',
  templateUrl: './department-training.component.html',
  styleUrls: ['./department-training.component.css']
})
export class DepartmentTrainingComponent {
  listnbrFbydep:any[]=[]
   lisTrainings:any
term:any
public value=""
Dates = []
  Dates2 = []
  form:FormGroup
  listdep:any
  c:number=1


constructor(private departmentservice:DepartementService,
  private formbuilder:FormBuilder,
  private trainingService:TrainingService
  ){}

 ngOnInit(){
this.ListFunction()
 this.form=this.formbuilder.group({
  nom:['',Validators.required],
  etat:['',Validators.required],
  type:['',Validators.required],
  datedebut:['',Validators.required],
  datefin:['',Validators.required]
 })

  }





  openModal(p:any){
    this.form.patchValue({
      nom:p.nom,etat:p.etat,
      type:p.type,datedebut:p.datedebut,
      datefin:p.datefin
    })
    alert("hhhhhhh")
  }

 ListFunction(){
   this.departmentservice.All().subscribe(
     (res:any)=>{this.listdep=res;console.log("liste",this.listdep)

    },
    (error:any)=>{console.log("error",error)}
   )
  }


  //  nbrFByDepartement(id:any){
  //  this.trainingService.nbrFByDepartement(id).subscribe(
  //    (res:any)=>{
  //   return res;
  //   },
  //   (error:any)=>{console.log("error",error)}

  //  )
  // }

  // fonction(id:any){
  //   this
  //   this.listdep.array.forEach(element => {
  //    this.listnbrFbydep.push( this.nbrFByDepartement(element.id))
  //   });

  // }


}
