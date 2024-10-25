import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../service/training.service';
import { EvaluationService } from '../service/evaluation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent {
  onetraining:any
  listtranings:any
  list:any
  listdesemploye:any
  name:string
  // myControl = new FormControl<string | Formation>('');
  constructor(
      private trainingService:TrainingService,
      private evaluationservice:EvaluationService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private activatedrouted:ActivatedRoute

     // private modalService: MdbModalService,
  ) { }
  form:FormGroup
  ide=localStorage.getItem("localid")
  idf:any

  id=this.activatedrouted.snapshot.params['id']
  //modalRef: MdbModalRef<ModalComponent> | null = null;


  ngOnInit(): void {
    this.getListtraining();
   this.getOnetraining()



 this.form=this.formbuilder.group({
        utilite:['',Validators.required],
        commentaire:['',Validators.required],

      })
console.log("id is ",this.ide)

  }
getListtraining(){
  this.trainingService.AllCategories().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){
    let formdata = new FormData()
     formdata.append("date",this.form.value.date),
    console.log(this.ide)
  this.idf=this.id;
    console.log("resultat",this.form.value)
this.evaluationservice.evaluate(this.ide,this.idf,this.form.value).subscribe(
(res:any)=>{console.log("created",res);
this.router.navigateByUrl("/evaluation")
},

(error:any)=>{console.log(error)}
)


  }

  // openModal() {
  //     this.modalRef = this.modalService.open(ModalComponent, {
  //       modalClass: 'modal-dialog-scrollable'
  //     })
  //   }
getOnetraining()
{
  this.trainingService.One(this.id).subscribe(
     (res:any)=>{this.onetraining=res;console.log("***********one training ****",this.onetraining)

     },
    (error:any)=>{console.log("error",error)}
   )
}



}
