import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../service/evaluation.service';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-update-evaluation',
  templateUrl: './update-evaluation.component.html',
  styleUrls: ['./update-evaluation.component.css']
})
export class UpdateEvaluationComponent {
  id=this.activatedrouted.snapshot.params['id']
  evaluation:any
  onetraining:any
  listtranings:any
  list:any
  listdesemploye:any
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
  //modalRef: MdbModalRef<ModalComponent> | null = null;


  ngOnInit(): void {
    this.uneevaluation()
    this.getListtraining();




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




  update(){
    let formdata = new FormData()
     formdata.append("date",this.form.value.date),
    console.log(this.ide)
    console.log(this.idf)
    console.log("resultat",this.form.value)
this.evaluationservice.mofifierevaluation(this.id,this.ide,this.idf,this.form.value).subscribe(
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


   uneevaluation(){
    this.evaluationservice.One(this.id).subscribe(
      (res)=>{this.evaluation=res; console.log("employe",res)
      this.form.patchValue({

      commentaire:this.evaluation.commentaire,
       utilite:this.evaluation.utilite,

     })

      this.idf = this.evaluation.formationEva.id ;
    },

      (error)=>{console.log(error)})
  }

}
