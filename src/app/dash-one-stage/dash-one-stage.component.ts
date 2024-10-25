import { Component, OnInit, ViewChild } from '@angular/core';
import { StageService } from '../service/stage.service';
import { StagiaireService } from '../service/stagiaire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DepartementService } from '../service/departement.service';
 import {Chart, registerables} from 'node_modules/chart.js';

 Chart.register(...registerables)
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
 // ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexLegend
} from "ng-apexcharts";
 export type ChartOptions = {
  series: ApexAxisChartSeries | number[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  legend:ApexLegend,
  markers:ApexMarkers,
  labels:string[],
  responsive:[ApexResponsive]
  colors: string[];
};

 export type ChartOptionsHorizontal = {
  series: ApexAxisChartSeries | number[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  legend:ApexLegend,
  markers:ApexMarkers,
  labels:string[],
  responsive:[ApexResponsive]
};
@Component({
  selector: 'app-dash-one-stage',
  templateUrl: './dash-one-stage.component.html',
  styleUrls: ['./dash-one-stage.component.css']
})


export class DashOneStageComponent  implements OnInit{



  numberArray:any
labeldata:any[]=[]
chartdata:any[]=[]

 mychart33: Chart | null = null;
 mychart44: Chart | null = null;
labeldataname:any[]=[]
chartdata2:any[]=[]
chartdata3:any[]=[]
  liststage:any
  liststagiaire:any
  filteredlist: any[] = [];
  listdepartement: any[] = [];
  filteredliststage: any[] = [];
  filteredliststagiaire: any[] = [];
  yearchosen:any
  //yearchosen='Tout'
  yeardata: any[] = [];
  yeardata2: any[] = [];
  mylist:any[]=[];
    mylist3:any[]=[];
  realdata:any[]=[]
    realdata3:any[]=[]
  form: FormGroup;
  listdepartements:any
  listsite:any
  nbinterne = 0
  nbexterne = 0
  nbcomplete = 0
  nbpasencore = 0
  nbnondebut = 0;
  nbmasculin=0;
  nbfeminin= 0;
  nbstage=0;
  nbstagiaire=0;listdepartementname: any[] = [];



   public chartOptions: Partial<ChartOptions>;
     public chartOptionsHorizontal: Partial<ChartOptionsHorizontal>;



constructor(private stageservice:StageService,
  private departementservice:DepartementService,
  private stagiaireservice:StagiaireService,
  private formbuilder: FormBuilder
){}

ngOnInit(): void {


console.log("11111111111",this.yearchosen);
  this.selectyear();

  // this.allyears();
  this.apexhorizontalbarchart();


this.getdepartementlist();
   // this.apexbarchart();
     this.form = this.formbuilder.group({
      yearchosen: ['', Validators.required],
       //yearchosen: ['Tout']
    });
}









 changeyear() {



    this.filteredlist = [];
     this.filteredliststage = [];
     this.filteredliststagiaire = [];
     this.listdepartement=[]
   this.chartdata=[]
  this.chartdata2=[]
   this.chartdata3=[]

      this.nbinterne=0
      this.nbexterne=0
      this.nbcomplete=0
      this.nbpasencore=0
      this.nbnondebut = 0
      this.nbmasculin =0
      this.nbfeminin = 0
      this.nbstage =0
      this.nbstagiaire=0


 this.stageservice.All().subscribe(
     (res:any)=>{this.liststage=res;console.log("listecategory",this.liststage)},
    (error:any)=>{console.log("error",error)}
   )

      if (this.form.value.yearchosen=='Tout'){
        this.filteredliststage=this.liststage
      }
else{
      for (let i = 0; i < this.liststage.length; i++) {

        if (new Date(this.liststage[i].date_debut).getFullYear() == this.form.value.yearchosen) {
          this.filteredliststage.push(this.liststage[i]);
        //  this.listdepartement.push(this.liststage[i].encadrant.departement.name)

        }
      }
    }

      for (let i = 0; i < this.filteredliststage.length; i++){
        if(this.filteredliststage[i].etat=="COMPLETE"){this.nbcomplete++;console.log("complet+1")}
        else if(this.filteredliststage[i].etat=="PAS_ENCORE"){this.nbpasencore++;console.log("pas encore+1")}
        else if(this.filteredliststage[i].etat=="NON_DEBUT"){this.nbnondebut++;console.log("non debut+1")}
        else console.log("autre")
        this.nbstage++
        this.nbstagiaire++
        if (this.filteredliststage[i].stagiaire.genre=="MASCULIN"){this.nbmasculin++}
        else if (this.filteredliststage[i].stagiaire.genre=="FEMININ"){this.nbfeminin++}



      }


    //  console.log("nb stage complet",this.nbcomplete)
    //  console.log("nb stage non complet",this.nbpasencore)
    //  console.log("nb stage non debut",this.nbnondebut)
    //  console.log("nb stagiaire feminun",this.nbfeminin)
    //  console.log("nb stagiaire masculin",this.nbmasculin)

      this.apexhorizontalbarchart();
      this.apexpiechart();

 let c = new Array(this.filteredliststage.length).fill(0)
let c3 = new Array(this.filteredliststage.length).fill(0)
   for (let k = 0; k < this.filteredliststage.length; k++) {

   const currentDepartementName = this.filteredliststage[k].encadrant.departement.name;
  this.chartdata.push(this.filteredliststage[k].encadrant.departement.name );

const index = this.chartdata.indexOf(currentDepartementName);

  // Increment the count for this department
  c[index] = (c[index] || 0) + 1;

    const currenSiteName = this.filteredliststage[k].encadrant.site.name;
  this.chartdata3.push(this.filteredliststage[k].encadrant.site.name );

const index3 = this.chartdata3.indexOf(currenSiteName);

  // Increment the count for this department
  c3[index3] = (c3[index3] || 0) + 1;


  }
this.realdata = (c.filter(count => count > 0)).map(count => count.toString());
   console.log("Chart Data Length:", this.chartdata.length);
console.log("Real Data Length:", this.realdata.length);
this.mylist=this.removeDuplicates(this.chartdata);
this.mylist.map(item=>this.chartdata2.push(item))
      console.log("******this.chartdata2****",this.chartdata2);
      console.log("****realdata****", this.realdata);



this.realdata3 = (c3.filter(count => count > 0)).map(count => count.toString());

this.mylist3=this.removeDuplicates(this.chartdata3);

this.mylist3.map(item=>this.chartdata3.push(item))
      console.log("******chartdata3****",this.chartdata3);
      console.log("****realdata3****", this.realdata3);

this.renderChart(this.chartdata2,this.realdata,"bar","barchart3")
this.renderChart1(this.mylist3,this.realdata3,"bar","barchart4")


 }


  getstagelist(){
     this.stageservice.All().subscribe(
     (res:any)=>{this.liststage=res;console.log("listecategory",this.liststage)},
    (error:any)=>{console.log("error",error)}
   )
  }


  getstagiairelist(){
     this.stagiaireservice.All().subscribe(
     (res:any)=>{this.liststagiaire=res;console.log("listecategory",this.liststagiaire)},
    (error:any)=>{console.log("error",error)}
   )
  }


  selectyear() {



    this.stageservice.All().subscribe(
      (res: any) => {
        this.liststage = res; console.log("liststage", this.liststage)
        console.log("222222222222",this.liststage)
        if (this.liststage != null) {
          console.log("not null")
          for (let i = 0; i < this.liststage.length; i++) {
            if (this.liststage[i].date_debut != null) {
              this.yeardata.push(
                new Date(this.liststage[i].date_debut).getFullYear()
              );

            }else console.log("value is null")


            this.yeardata2 = this.removeDuplicates(this.yeardata);
            console.log(this.yeardata2, "compteur num", i)
          }


        } else { console.log("liste vide") }
        console.log("year data2", this.yeardata2);




      },
      (error: any) => { console.log("error", error) }
    )
    console.log("3333333333333333",this.liststage)
    //LISTE DES RECRUTEMENT
      this.stagiaireservice.All().subscribe(
     (res:any)=>{


      this.liststagiaire=res;console.log("******liste recrutement****",this.liststagiaire)},
    (error:any)=>{console.log("error",error)}
   )

   // liste decision
// this.decisisonservice.affichetous().subscribe(
//      (res:any)=>{this.listdecision=res;console.log("liste",this.listdecision)},
//     (error:any)=>{console.log("error",error)}
//    )





//debut

//    this.filteredlist = [];
//      this.filteredliststage = [];
//      this.filteredliststagiaire = [];
//      this.listdepartement=[]
//    this.chartdata=[]
//   this.chartdata2=[]
//    this.chartdata3=[]

//       this.nbinterne=0
//       this.nbexterne=0
//       this.nbcomplete=0
//       this.nbpasencore=0
//       this.nbnondebut = 0
//       this.nbmasculin =0
//       this.nbfeminin = 0
//       this.nbstage =0
//       this.nbstagiaire=0


// console.log("66666666666666666",this.liststage)

//       for (let i = 0; i < this.liststage.length; i++) {

//           this.filteredliststage.push(this.liststage[i]);




//       };
// //        console.log("######liste depar per year ####",this.listdepartement)







//       //console.log("filtered list stage",this.filteredliststage)
//      // console.log("****TAILLE****", this.filteredliststage.length)
//       for (let i = 0; i < this.filteredliststage.length; i++){
//         if(this.filteredliststage[i].etat=="COMPLETE"){this.nbcomplete++;console.log("complet+1")}
//         else if(this.filteredliststage[i].etat=="PAS_ENCORE"){this.nbpasencore++;console.log("pas encore+1")}
//         else if(this.filteredliststage[i].etat=="NON_DEBUT"){this.nbnondebut++;console.log("non debut+1")}
//         else console.log("autre")
//         this.nbstage++
//         this.nbstagiaire++
//         if (this.filteredliststage[i].stagiaire.genre=="MASCULIN"){this.nbmasculin++}
//         else if (this.filteredliststage[i].stagiaire.genre=="FEMININ"){this.nbfeminin++}



//       }

//     //  console.log("nb stage complet",this.nbcomplete)
//     //  console.log("nb stage non complet",this.nbpasencore)
//     //  console.log("nb stage non debut",this.nbnondebut)
//     //  console.log("nb stagiaire feminun",this.nbfeminin)
//     //  console.log("nb stagiaire masculin",this.nbmasculin)

//       this.apexhorizontalbarchart();
//       this.apexpiechart();

//  let c = new Array(this.filteredliststage.length).fill(0)
// let c3 = new Array(this.filteredliststage.length).fill(0)
//    for (let k = 0; k < this.filteredliststage.length; k++) {

//    const currentDepartementName = this.filteredliststage[k].encadrant.departement.name;
//   this.chartdata.push(this.filteredliststage[k].encadrant.departement.name );

// const index = this.chartdata.indexOf(currentDepartementName);

//   // Increment the count for this department
//   c[index] = (c[index] || 0) + 1;

//     const currenSiteName = this.filteredliststage[k].encadrant.site.name;
//   this.chartdata3.push(this.filteredliststage[k].encadrant.site.name );

// const index3 = this.chartdata3.indexOf(currenSiteName);

//   // Increment the count for this department
//   c3[index3] = (c3[index3] || 0) + 1;


//   }
// this.realdata = (c.filter(count => count > 0)).map(count => count.toString());
//    console.log("Chart Data Length:", this.chartdata.length);
// console.log("Real Data Length:", this.realdata.length);
// this.mylist=this.removeDuplicates(this.chartdata);
// this.mylist.map(item=>this.chartdata2.push(item))
//       console.log("******this.chartdata2****",this.chartdata2);
//       console.log("****realdata****", this.realdata);



// this.realdata3 = (c3.filter(count => count > 0)).map(count => count.toString());

// this.mylist3=this.removeDuplicates(this.chartdata3);

// this.mylist3.map(item=>this.chartdata3.push(item))
//       console.log("******chartdata3****",this.chartdata3);
//       console.log("****realdata3****", this.realdata3);

// this.renderChart(this.chartdata2,this.realdata,"bar","barchart3")
// this.renderChart1(this.mylist3,this.realdata3,"bar","barchart4")


//fin

  }

  removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }



  apexhorizontalbarchart(){

    this.chartOptionsHorizontal = {
      series: [
        {
          name: "basic",
          data: [this.nbcomplete, this.nbpasencore, this.nbnondebut]
        }
      ],
      chart: {
        type: "bar",
        height: 250,
        width: 500,
      },
       fill:{
       colors: [
      '#C67734', '#4A2C13'

      ],
     },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },

      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "COMPLET",
          "NON COMPLET",
          "NON DEBUT",

        ]
      }
    };

  }

  apexpiechart(){

    this.chartOptions= {
      series: [this.nbmasculin,this.nbfeminin],
      chart: {
        width: 380,
        type: "pie",
      },

       colors: [
      '#C67734', '#4A2C13'

      ],
       fill:{
       colors: [
      '#C67734', '#4A2C13'

      ],
     },

      labels: ["MASUCULIN", "FEMININ"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,

            },

            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };



  }


  getdepartementlist(){

 this.departementservice.All().subscribe(
     (res:any)=>{this.listdepartement=res;
    //  console.log("--------------listedepartem",this.listdepartement);





  },
    (error:any)=>{console.log("error",error)}
   );


  }





  //**************chat js*********** */
  renderChart(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart33){this.mychart33.destroy()}

       this.mychart33=   new Chart(id, {
      type:type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Stage/Departement',
          data: maindata,
          borderWidth: 1,

         backgroundColor: [
      '#C67734', '#4A2C13'

      ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 renderChart1(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart44){this.mychart44.destroy()}

       this.mychart44=   new Chart(id, {
      type:type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Stage/Site',
          data: maindata,
          borderWidth: 1,
        //  backgroundColor:colordata

         backgroundColor: [
      '#C67734', '#4A2C13'

      ], // backgroundColor:["#F89541","grey"]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
