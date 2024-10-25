import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { InscriptionService } from '../service/inscription.service';


@Component({
  selector: 'app-traning-inscription',
  templateUrl: './traning-inscription.component.html',
  styleUrls: ['./traning-inscription.component.css']
})
export class TraningInscriptionComponent {
inscriptions:any
term:string
Dates = []
  Dates2 = []
  c:number=1
constructor(private inscriptionservice:InscriptionService){}

 ngOnInit(){
 this.affichetous()
  }


//   affichetous(){
//    this.inscriptionservice.affichetous().subscribe(
//      (res:any)=>{this.inscriptions=res;console.log("liste",this.inscriptions)
//     // this.Dates = []
//         this.inscriptions.map((item: any) => (
//           this.Dates.push(((new Date(item.date)).getDay()) +
//             "/" +((new Date(item.date)).getMonth()+1) +
//             "/" +((new Date(item.date)).getFullYear()))

//         )

//         );
//         console.log(new Date)
// console.log("la date est ",this.Dates)
//     },
//     (error:any)=>{console.log("error",error)}
//    )
//   }

affichetous() {
  this.inscriptionservice.affichetous().subscribe(
    (res: any) => {
      this.inscriptions = res;

      // Initialize Dates array
      this.Dates = [];

      this.inscriptions.forEach((item: any) => {
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
    (error: any) => {
      console.log("error", error);
    }
  );
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
this.affichetous()
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
