import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../service/demande.service';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-demande-formation',
  templateUrl: './demande-formation.component.html',
  styleUrls: ['./demande-formation.component.css'],


})
export class DemandeFormationComponent {

  list:any
term:any
c:number=1
listbyEtat:any
  constructor(private demandeservice:DemandeService){}

     ngOnInit(){
      this.listEnattente()
  }


  ListFunction(){
   this.demandeservice.affichetous().subscribe(
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
      this.demandeservice.supprimer(id).subscribe(
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

listEnattente(){
  this.demandeservice.demandeEnattente().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)},
    (error:any)=>{console.log("error",error)}
   )
}
listeaccepte(){
  this.demandeservice.demandeAccepte().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)},
    (error:any)=>{console.log("error",error)}
   )
}
listReffuse(){
  this.demandeservice.DemandeRefuse().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)},
    (error:any)=>{console.log("error",error)}
   )
}
validerDemande(id:any){
  this.demandeservice.validerDemande(id).subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)
    this.listeaccepte()
    alert("demande accepte")
    },
    (error:any)=>{console.log("error",error)}
   )
}

refuserDemande(id:any){
  this.demandeservice.refuserDemande(id).subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)

    this.listReffuse()
    alert("demande refusé")
    },
    (error:any)=>{console.log("error",error)}
   )
}


}
