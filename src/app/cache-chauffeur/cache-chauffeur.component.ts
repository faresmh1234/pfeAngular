import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DecisionService } from '../service/decision.service';
import { CachechauffeurService } from '../service/cachechauffeur.service';

@Component({
  selector: 'app-cache-chauffeur',
  templateUrl: './cache-chauffeur.component.html',
  styleUrls: ['./cache-chauffeur.component.css']
})
export class CacheChauffeurComponent {
  list:any
term:any
public value=""
c:number=1

constructor(private cachechauffeurservice:CachechauffeurService){}

 ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.cachechauffeurservice.All().subscribe(
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
      this.cachechauffeurservice.Delete(id).subscribe(
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
