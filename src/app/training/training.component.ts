import { Component,OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent implements OnInit{
  lisTrainings:any
term:any
public value=""
c:number=1
filtredlist:any

constructor(private trainingService:TrainingService){}

 ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.trainingService.AllCategories().subscribe(
     (res:any)=>{this.lisTrainings=res;console.log("*********TRAINING LIST********",this.lisTrainings);


      //envoi
     },
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
      this.trainingService.Delete(id).subscribe(
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
