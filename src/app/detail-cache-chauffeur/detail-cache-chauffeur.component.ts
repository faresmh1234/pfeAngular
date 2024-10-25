import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CachechauffeurService } from '../service/cachechauffeur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-cache-chauffeur',
  templateUrl: './detail-cache-chauffeur.component.html',
  styleUrls: ['./detail-cache-chauffeur.component.css']
})
export class DetailCacheChauffeurComponent {
   chauffeur:any
id=this.activatedrouted.snapshot.params['id']
  constructor(
    private cachechauffeurservice:CachechauffeurService,
     private activatedrouted:ActivatedRoute,
       private  router: Router
  ){}
  ngOnInit(): void {
this.unemploye()
  }



  unemploye(){
    this.cachechauffeurservice.One(this.id).subscribe(
      (res)=>{this.chauffeur=res; console.log("employe",res)},
      (error)=>{console.log(error)})
  }

  supprimer(id:String)
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
 this.router.navigateByUrl("/home")
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
