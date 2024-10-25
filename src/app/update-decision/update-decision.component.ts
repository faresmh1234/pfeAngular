import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecisionService } from '../service/decision.service';
import { DemandeEmploieService } from '../service/demande-emploie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-decision',
  templateUrl: './update-decision.component.html',
  styleUrls: ['./update-decision.component.css']
})
export class UpdateDecisionComponent {
  one:any
 decision:any
  list:any
listde:any
iddep:any
idde:any
id=this.activatedrouted.snapshot.params['id'];

  constructor(
      private decisionservice:DecisionService,
    private demandeemploieservice:DemandeEmploieService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private activatedrouted: ActivatedRoute,
  ) { }
  form:FormGroup

  idu=localStorage.getItem("localid")

  ngOnInit(): void {
    this.unedesision()
    this.getListde();


 this.form=this.formbuilder.group({
        decision:['',Validators.required],
        vue_hr:['',Validators.required],
        vue_gestionnaire:['',Validators.required],
        vue_decideur:['',Validators.required],


      })



  }





  update(){
    let datajson ={
      "decision":this.form.value.decision,
      "vue_hr":this.form.value.vue_hr,
      "vue_gestionnaire":this.form.value.vue_gestionnaire,
      "vue_decideur":this.form.value.vue_decideur
    }

    console.log("resultat",this.form.value)
this.decisionservice.updatewithde(this.id,this.idde,datajson).subscribe(
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

unedesision(){
    this.decisionservice.affiche(this.id).subscribe(
      (res)=>{this.decision=res; console.log("employe",res)
      this.form.patchValue({
      decision:this.decision.decision,
      vue_hr:this.decision.vue_hr,
       vue_decideur:this.decision.vue_decideur,
      vue_gestionnaire:this.decision.vue_gestionnaire,

     })
     this.idde = this.decision.demandeemploie.id ;

    },

      (error)=>{console.log(error)})
  }


}
