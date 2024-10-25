import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SiteService } from '../service/site.service';
import { EvaluationService } from '../service/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {


  listevaluation:any
term:any

constructor(private eservice:EvaluationService){}


  ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.eservice.All().subscribe(
     (res:any)=>{this.listevaluation=res;console.log("liste",this.listevaluation)},
    (error:any)=>{console.log("error",error)}
   )
  }

  delete(id:String)
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
      this.eservice.Delete(id).subscribe(
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
