import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { StagiaireService } from '../service/stagiaire.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent {
  list:any
term:any
c:number=1

constructor(private stagiaireservice:StagiaireService){}
  ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.stagiaireservice.All().subscribe(
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
      this.stagiaireservice.Delete(id).subscribe(
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
