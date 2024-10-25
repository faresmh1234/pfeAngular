import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TrainingService } from '../service/training.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-planing',
  templateUrl: './training-planing.component.html',
  styleUrls: ['./training-planing.component.css']
})
export class TrainingPlaningComponent {
 lisTrainings:any
term:any
public value=""
Dates = []
  Dates2 = []
  form:FormGroup
   iddep = this.activatedroute.snapshot.params['id'];
   c:number=1
   filteredlist:any
constructor(private trainingService:TrainingService,
  private activatedroute: ActivatedRoute,
  private formbuilder:FormBuilder){}

 ngOnInit(){
 this.affichetous();
 this.form=this.formbuilder.group({
  nom:['',Validators.required],
  etat:['',Validators.required],
  type:['',Validators.required],
  datedebut:['',Validators.required],
  datefin:['',Validators.required]
 })

  }


  // ListFunction(){
  //  this.trainingService.AllCategories().subscribe(
  //    (res:any)=>{this.lisTrainings=res;console.log("liste",this.lisTrainings)
  // this.Dates = []
  //       this.Dates2 = []
  //       this.lisTrainings.map((item: any) => (
  //         this.Dates.push(new Date(item.datedebut).getDay() +
  //           "/" + new Date(item.datedebut).getMonth() +
  //           "/" + new Date(item.datedebut).getFullYear()),
  //           this.Dates2.push(new Date(item.datefin).getDay() +
  //           "/" + new Date(item.datefin).getMonth() +
  //           "/" + new Date(item.datefin).getFullYear())
  //       )
  //       );



  //   },
  //   (error:any)=>{console.log("error",error)}
  //  )
  // }

  affichetous() {
  this.trainingService.selectFByDep(this.iddep).subscribe(
    (res: any) => {
      this.lisTrainings = res;9
      this.filteredlist=this.lisTrainings

      // Initialize Dates array
      this.Dates = [];

      this.lisTrainings.forEach((item: any) => {
        // Create a Date object using item.date
        const date = new Date(item.datedebut);
        const date2 = new Date(item.datefin)
        // Get the date components in the desired order (MM/DD/YYYY)
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year = date.getFullYear();

        const month2 = String(date2.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
        const day2 = String(date2.getDate()).padStart(2, '0'); // Pad with leading zero if needed
        const year2 = date2.getFullYear();
        // Construct the formatted date string
        const formattedDate = `${month}/${day}/${year}`;
        const formattedDate2 = `${month2}/${day2}/${year2}`;
        // Push the formatted date to the Dates array
        this.Dates.push(formattedDate);
        this.Dates2.push(formattedDate2);
      });

      console.log("la date est", this.Dates);
    },
    (error: any) => {
      console.log("error", error);
    }
  );
}

  openModal(p:any){
    this.form.patchValue({
      nom:p.nom,etat:p.etat,
      type:p.type,datedebut:p.datedebut,
      datefin:p.datefin
    })
    alert("hhhhhhh")
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
      this.trainingService.Delete(id).subscribe(
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
// COMPLETE,EN_COURS,ANNULE,NON_DEBUT,REPORTE

complete(){
  this.filteredlist = this.lisTrainings.filter((item) => item.etat == 'COMPLETE');
  this.c=1
}
encours(){
  this.filteredlist = this.lisTrainings.filter((item) => item.etat == 'EN_COURS');
  this.c=1
}
annule(){
  this.filteredlist = this.lisTrainings.filter((item) => item.etat == 'ANNULE');
  this.c=1
}
nondebut(){
  this.filteredlist = this.lisTrainings.filter((item) => item.etat == 'NON_DEBUT');
  this.c=1
}
reporte(){
  this.filteredlist = this.lisTrainings.filter((item) => item.etat == 'REPORTE');
  this.c=1
}
}
