import { Component } from '@angular/core';
import { DecisionService } from '../service/decision.service';
import { DemandeEmploieService } from '../service/demande-emploie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrls: ['./create-decision.component.css']
})
export class CreateDecisionComponent {
  one:any

  list:any
listde:any
iddep:any
idde:any

  constructor(
      private decisionservice:DecisionService,
    private demandeemploieservice:DemandeEmploieService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
  ) { }
  form:FormGroup

  idu=localStorage.getItem("localid")

  ngOnInit(): void {

    this.getListde();


 this.form=this.formbuilder.group({
        decision:['',Validators.required],
        vue_hr:['',Validators.required],
        vue_gestionnaire:['',Validators.required],
        vue_decideur:['',Validators.required],


      })



  }





  create(){
    let datajson ={
      "decision":this.form.value.decision,
      "vue_hr":this.form.value.vue_hr,
      "vue_gestionnaire":this.form.value.vue_gestionnaire,
      "vue_decideur":this.form.value.vue_decideur
    }

    console.log("resultat",this.form.value)
this.decisionservice.savewithde(this.idde,datajson).subscribe(
(res:any)=>{console.log("created",res);
this.router.navigateByUrl("/decision")},
(error:any)=>{console.log(error)}
)

  }



  getListde(){
  this.demandeemploieservice.affichetous().subscribe(
(res:any)=>{this.listde=res;console.log("liste demande Emploie",res)},

(error:any)=>{console.log(error)}

  )
}

// creerdep(){
//      console.log("resss",this.form.value)
// this.demandeemploieservice.Create(this.form.value).subscribe(
// (res:any)=>{console.log("created");
// this.getListdep()
// },
// (error:any)=>{console.log(error)}
// )

// }


}
