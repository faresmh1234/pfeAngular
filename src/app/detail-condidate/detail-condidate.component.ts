import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CondidatService } from '../service/condidat.service';

@Component({
  selector: 'app-detail-condidate',
  templateUrl: './detail-condidate.component.html',
  styleUrls: ['./detail-condidate.component.css']
})
export class DetailCondidateComponent {
   employe:any
id=this.activatedrouted.snapshot.params['id']
  constructor(
    private condidatservice:CondidatService,
     private activatedrouted:ActivatedRoute,
       private  router: Router
  ){}
  ngOnInit(): void {
this.unemploye()
  }



  unemploye(){
    this.condidatservice.One(this.id).subscribe(
      (res)=>{this.employe=res; console.log("employe",res)},
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
      this.condidatservice.Delete(id).subscribe(
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
