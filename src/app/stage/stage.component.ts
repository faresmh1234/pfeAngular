import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { StageService } from '../service/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
   lisTrainings:any
term:any
public value=""
c:number=1

constructor(private stageservice:StageService){}

 ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.stageservice.All().subscribe(
     (res:any)=>{this.lisTrainings=res;console.log("liste",this.lisTrainings)},
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
      this.stageservice.Delete(id).subscribe(
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
