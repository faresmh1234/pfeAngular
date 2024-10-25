import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { InscriptionService } from '../service/inscription.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../service/employe.service';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-employersubintraining',
  templateUrl: './employersubintraining.component.html',
  styleUrls: ['./employersubintraining.component.css']
})
export class EmployersubintrainingComponent {
  c:number=1
 list:any
term:any
id=this.activatedroute.snapshot.params['id'];

constructor(private InscriptionService:InscriptionService,
  private formationservice:TrainingService,
  private activatedroute:ActivatedRoute ,
  private employeservice:EmployeService
  ){}
  ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.formationservice.selectEsubinF(this.id).subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)},
    (error:any)=>{console.log("error",error)}
   )
  }

  deleteone(id:String)
{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.employeservice.Delete(id).subscribe(
        (res:any)=>{console.log("ok");
this.ListFunction()
      },
      (error:any)=>{console.log("error is",error)}
      )
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
}
