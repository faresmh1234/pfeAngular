import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { InscriptionService } from '../service/inscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-inscription',
  templateUrl: './detail-inscription.component.html',
  styleUrls: ['./detail-inscription.component.css']
})
export class DetailInscriptionComponent {
  term:string
  c:number=1
   demande:any
  list:any
id=this.activatedrouted.snapshot.params['id']
  constructor(
    private inscriptionservice:InscriptionService,
     private activatedrouted:ActivatedRoute,
       private  router: Router
  ){}
  ngOnInit(): void {
this.unedemande()
this.ListFunction();
  }



  unedemande(){
    this.inscriptionservice.affiche(this.id).subscribe(
      (res)=>{this.demande=res; console.log("demande",res)},
      (error)=>{console.log(error)})
  }

  ListFunction(){
   this.inscriptionservice.members(this.id).subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)},
    (error:any)=>{console.log("error",error)}
   )
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
      this.inscriptionservice.supprimer(id).subscribe(
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
