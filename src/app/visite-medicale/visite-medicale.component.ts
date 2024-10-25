import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { VisiteMedicalService } from '../service/visite-medical.service';

@Component({
  selector: 'app-visite-medicale',
  templateUrl: './visite-medicale.component.html',
  styleUrls: ['./visite-medicale.component.css']
})
export class VisiteMedicaleComponent {
   list:any
term:any
public value=""
c:number=1
Dates = []
  Dates2 = []
  Dates3= []

constructor(private visiteMedicalService:VisiteMedicalService){}

 ngOnInit(){
 this.ListFunction()
  }


  ListFunction(){
   this.visiteMedicalService.AllCategories().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list)
    // Initialize Dates array
      this.Dates = [];

      this.list.forEach((item: any) => {
        // Create a Date object using item.date
        const date = new Date(item.date_embauche);
        const date2 = new Date(item.date_visite)
        const date3 = new Date(item.arenouveleavant)
        // Get the date components in the desired order (MM/DD/YYYY)
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = date.getFullYear();

        const month2 = String(date2.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day2 = String(date2.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year2 = date2.getFullYear();

        const month3 = String(date3.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day3 = String(date3.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year3 = date3.getFullYear();
        // Construct the formatted date string
        const formattedDate = `${month}/${day}/${year}`;
        const formattedDate2 = `${month2}/${day2}/${year2}`;
        const formattedDate3 = `${month3}/${day3}/${year3}`;
        // Push the formatted date to the Dates array
        this.Dates.push(formattedDate);
        this.Dates2.push(formattedDate2);
        this.Dates3.push(formattedDate3);
      });
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
      this.visiteMedicalService.Delete(id).subscribe(
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
