import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { InscriptionService } from '../service/inscription.service';
import { EvaluationService } from '../service/evaluation.service';


@Component({
  selector: 'app-detail-traning',
  templateUrl: './detail-traning.component.html',
  styleUrls: ['./detail-traning.component.css']
})


export class DetailTraningComponent implements OnInit{
OneTrining:any
 month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
 datedebut:any
 nbri:any
 nbrutile:any
 nbrnonutile:any
 nbrpeututile:any
 nbrtresutile:any
 formattedDate1:any
 datefin:any
  formattedDate2:any
id=this.activatedroute.snapshot.params['id'];
nbrutilitetotale:number
  constructor(
    //injection de service à utoiliser
    private formationservice:TrainingService,
    private inscriptionservice:InscriptionService,
    private evaluationservice:EvaluationService,
    private activatedroute:ActivatedRoute ,
  ){}

  ngOnInit(): void {
    //appel à une autre fonction dés le départ
    this.OneTaringFunction()
    this.nbrinscription()
    this.nbrEvaluationutile()
    this.nbrEvaluationnonutile()
    this.nbrEvaluationpeututile()
    this.nbrEvaluationtresutile()
    this.nbrtotale()

  }

  OneTaringFunction(){
    //avel de la fonction de service qui pa retourner le sefrvice cherché exemple get.post.put
this.formationservice.One(this.id).subscribe(
 (res)=>{this.OneTrining=res;

   console.log("object",this.OneTrining);
let date=new Date(this.OneTrining.datedebut);
let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
let formattedDate = formatter.format(date);
console.log("formattedDate",formattedDate);
this.formattedDate1=formattedDate;

console.log("datefin",this.OneTrining.datefin);
let datef=new Date(this.OneTrining.datefin);
let  m =this.month[datef.getMonth()]
let  d =datef.getDay()
let  y =datef.getFullYear()
console.log("m=",m);
console.log("d=",d);
console.log("y=",y);

let formattedDateF = formatter.format(datef);
console.log("formattedDateFIN",formattedDateF);
this.formattedDate2=formattedDateF,







       (error:any)=>{console.log("error",error)}
    }
)
  }


  nbrinscription(){
      console.log("this is",this.id);
    this.inscriptionservice.nbrinsnscriptionof(this.id).subscribe(
      (res)=>{this.nbri=res; console.log("nbr of inscription",this.nbri);

       (error:any)=>{console.log("error2",error)}
    }
    )
  }

  nbrEvaluationutile(){
      console.log("this is",this.id);
    this.evaluationservice.nbrutile(this.id).subscribe(
      (res)=>{this.nbrutile=res; console.log("nbr of utile",this.nbrutile);

       (error:any)=>{console.log("error2",error)}
    }
    )
  }

  nbrEvaluationnonutile(){
      console.log("this is",this.id);
    this.evaluationservice.nbrnonutile(this.id).subscribe(
      (res)=>{this.nbrnonutile=res; console.log("nbr of inscription",this.nbrnonutile);

       (error:any)=>{console.log("error2",error)}
    }
    )
  }


  nbrEvaluationpeututile(){
      console.log("this is",this.id);
    this.evaluationservice.nbrpeututile(this.id).subscribe(
      (res)=>{this.nbrpeututile=res; console.log("nbr of inscription",this.nbrpeututile);

       (error:any)=>{console.log("error2",error)}
    }
    )
  }


  nbrEvaluationtresutile(){
      console.log("this is",this.id);
    this.evaluationservice.nbrtresutile(this.id).subscribe(
      (res)=>{this.nbrtresutile=res; console.log("nbr of inscription",this.nbrtresutile);

       (error:any)=>{console.log("error2",error)}
    }
    )
  }

  nbrtotale(){
    this.nbrutilitetotale=Number(this.nbrnonutile)+Number(this.nbrutile)+Number(this.nbrpeututile)+Number(this.nbrtresutile)
    console.log("totale",this.nbrutilitetotale)
  }

}
