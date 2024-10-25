import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CondidatService } from '../service/condidat.service';

@Component({
  selector: 'app-condidate',
  templateUrl: './condidate.component.html',
  styleUrls: ['./condidate.component.css']
})
export class CondidateComponent {
  list:any
term:any
c:number=1
constructor(private condidateService:CondidatService){}
  ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.condidateService.All().subscribe(
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
      this.condidateService.Delete(id).subscribe(
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
