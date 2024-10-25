import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeEmploieService } from '../service/demande-emploie.service';

@Component({
  selector: 'app-demande-emploie',
  templateUrl: './demande-emploie.component.html',
  styleUrls: ['./demande-emploie.component.css']
})
export class DemandeEmploieComponent {
  listEmploie:any
term:any
public value=""
c:number=1
Dates = []
filteredlist:any

constructor(private demandeemploieService:DemandeEmploieService){}

 ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.demandeemploieService.affichetous().subscribe(
     (res:any)=>{this.listEmploie=res;console.log("liste",this.listEmploie)
    this.filteredlist=this.listEmploie
    // Initialize Dates array
      this.Dates = [];

      this.listEmploie.forEach((item: any) => {
        // Create a Date object using item.date
        const date = new Date(item.date);

        // Get the date components in the desired order (MM/DD/YYYY)
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = date.getFullYear();


        // Construct the formatted date string
        const formattedDate = `${month}/${day}/${year}`;

        // Push the formatted date to the Dates array
        this.Dates.push(formattedDate);

      });

      console.log("la date est", this.Dates);

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
      this.demandeemploieService.supprimer(id).subscribe(
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

selectionne(){
    this.filteredlist = this.listEmploie.filter((item) => item.etatdemandeemploie == 'SELECTIONNE');
this.c=1
}
nonselectionne(){
      this.filteredlist = this.listEmploie.filter((item) => item.etatdemandeemploie == 'NON_SELECTIONNE');
this.c=1
}

}
