import { Component } from '@angular/core';
import { InscriptionService } from '../service/inscription.service';
import { TrainingService } from '../service/training.service';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {


  onetraining:any
  listtranings:any
  list:any
  listdesemploye:any
  // myControl = new FormControl<string | Formation>('');
  constructor(
      private trainingservice:TrainingService,
      private inscriptionservice:InscriptionService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private employeservice:EmployeService
     // private modalService: MdbModalService,
  ) { }
  form:FormGroup
  ide:any
  idf:any
  //modalRef: MdbModalRef<ModalComponent> | null = null;


  ngOnInit(): void {
    this.getListtraining();

    this.ListemployerFunction();


 this.form=this.formbuilder.group({
        date:['',Validators.required],

      })
console.log("id is ",this.ide)

  }
getListtraining(){
  this.trainingservice.AllCategories().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){
    let formdata = new FormData()
     formdata.append("date",this.form.value.date),

    console.log("resultat",this.form.value)
this.inscriptionservice.inscrire(this.idf,this.form.value).subscribe(
(res:any)=>{console.log("created",res);
//this.router.navigateByUrl("/addmembers")


 let id = res.id;
 console.log("id",id)

          this.router.navigate(['/addinscriptionmembers', { param: id }]);

},

(error:any)=>{console.log(error)}
)


  }

  // openModal() {
  //     this.modalRef = this.modalService.open(ModalComponent, {
  //       modalClass: 'modal-dialog-scrollable'
  //     })
  //   }

  ListemployerFunction(){
   this.employeservice.All().subscribe(
     (res:any)=>{this.listdesemploye=res;console.log("hhhhhhhhh",this.listdesemploye)},
    (error:any)=>{console.log("error",error)}
   )
  }



}
