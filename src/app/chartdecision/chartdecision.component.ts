import { Component, Input, OnInit } from '@angular/core';
import { DecisionService } from '../service/decision.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chartdecision',
  templateUrl: './chartdecision.component.html',
  styleUrls: ['./chartdecision.component.css']
})
export class ChartdecisionComponent implements OnInit{

   list:any
term:any
year=localStorage.getItem("yearchosen")
Chart:any
public value=""
c:number=1
nbembauche=0
nbrefuse=0
  mychart1: any;
nbprioritaire=0
nbpasembauche=0
 realdata: any[] = [];
 data:string

constructor(private decisionservice:DecisionService){}

 @Input() childmessage: string;
  ngOnInit(): void {
    localStorage.removeItem("yearchosen")
this.receiveMessage(this.childmessage);
      this.listfn()
  }
receiveMessage($event:string){
  this.childmessage=$event;
  console.log("Year chosen rim : "+this.year);
}
  listfn(){

     this.decisionservice.affichetous().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list);

 for(let i =0; i <this.list.length;i++){
  console.log("**list emploi decision*",this.list[i].demandeemploie);

if(new Date(this.list[i].demandeemploie.date).getFullYear().toString()==this.year){
console.log("**list decision*",this.list);
//EMBAUCHE,REFUSE,PRIORITAIRE,PAS_EMBAUCHE
if(this.list[i].decision=="PAS_EMBAUCHE"){this.nbpasembauche++}
else if(this.list[i].decision=="PRIORITAIRE"){this.nbprioritaire++}
else if(this.list[i].decision=="EMBAUCHE"){this.nbembauche++}
else if(this.list[i].decision=="REFUSE"){this.nbrefuse++}}



}

this.realdata=[this.nbembauche.toString(),this.nbprioritaire.toString(),this.nbpasembauche.toString(),this.nbrefuse.toString()]


this.renderChart(['EMBAUCHE','REFUSE','PRIPRITAIRE','PAS_EMBAUCHE'],this.realdata,"pie","idbar")



    },







    (error:any)=>{console.log("error",error)}
   )
  }



   renderChart(labeldata: any, maindata: any, type: any, id: any) {
    if (this.mychart1) {
      this.mychart1.destroy();
    }

    this.mychart1 = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: labeldata,
            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: ['#F89541', 'grey','blue','green'],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
