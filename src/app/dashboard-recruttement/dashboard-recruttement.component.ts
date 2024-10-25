import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { RecruttementService } from '../service/recruttement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecisionService } from '../service/decision.service';
import { DemandeEmploieService } from '../service/demande-emploie.service';
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
  ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexLegend
} from "ng-apexcharts";
import * as ApexCharts from 'apexcharts';


export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard-recruttement',
  templateUrl: './dashboard-recruttement.component.html',
  styleUrls: ['./dashboard-recruttement.component.css'],
})
export class DashboardRecruttementComponent {
  chartOptions1:any
  chartOptions2:any
  chartOptions3:any
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions4: any;
  @ViewChild("barchart") barchart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;
  @ViewChild("donutchart") donutchart: ChartComponent;
  chartdata: any;
  labeldata: any[] = [];
  labeldataname: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  lisTrainings: any;
  interndata: any[] = [];
  decisionfinale: any[] = [];
  nbinterne = 0;
  nbexterne = 0;
  nbcomplete = 0;
  nbcanceled = 0;
  nbinprogress = 0;
  nbnotstarted = 0;
  nbreported = 0;
  sourceemploidata: any[] = [];
  listyears: any;
  t: any;
  form: FormGroup;
  yeardata: any[] = [];
  yeardata2: any[] = [];
  filteddataInterneExterne: any[] = [];
  annee: any;
  condition = true;
  public value = '';
  filteredlist: any[] = [];
  mychart1: any;
  mychart2: any;
  mychart3: any;
  mychart4: any;
  mychart5: any;
  totalcompletedata: any[] = [];
  labeldatasource:any[] = [];
  listparmoisdata: any[] = [];
  decisionchartdata: any[]= [];
  labeldatarecruttement: any[] = [];
  mois = [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'Mai',
    'Jui',
    'Juil',
    'Aout',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  //array ['mail','Avr','mail]
  //resultat [0,0,0,nb,]
  nbcompleteMois = 0;
  chartjs: any;
  listdemandeemploie: any;
  filteredlistdemandeemploie: any;
  filteredlistdecision: any;
  listdecision: any;
  listrecuruttement: any;
  filteredlistrecrutment: any;
  nbembauche = 0
  nbrefuse = 0
  nbprioritaire = 0
  nbpasembauche = 0
  nbfacebook = 0;
  nblinkedin = 0
  nbemail = 0
  nbcondidatspontanne = 0
  nbautre = 0
  nbcabinetr = 0
  nbsiteofficielle = 0
  yearchosen:any

  constructor(
    private demandeemploieservice: DemandeEmploieService,
    private decisisonservice: DecisionService,
    private recruttementservice: RecruttementService,
    private formbuilder: FormBuilder
  ) { }
  @Output() messageEvent = new EventEmitter<string>();


  ngOnInit(): void {
   // this.listRecFunction();

    this.selectyear();

    this.renderapexchart();
    this.donutchartapex();
    this.barchartapex2();
    // this.listfunction();
    // this.listfunction()
    this.form = this.formbuilder.group({
      yearchosen: ['', Validators.required],
    });

  }
   sendMessage() {

  }
  changeyear() {
    console.log('*********', this.form.value.yearchosen);
        this.messageEvent.emit(this.form.value.yearchosen);
        localStorage.setItem("yearchosen",this.form.value.yearchosen);
//this.messageEvent.emit("rim");
//console.log("after emit event")
    this.filteredlist = [];
    this.filteredlistdecision = [];
    this.filteredlistrecrutment = [];
    this.filteredlistdemandeemploie = [];

    if (this.filteredlist != null) {
      this.labeldata = [];
      this.realdata = [];
      this.nbexterne = 0;
      this.nbinterne = 0;
      this.sourceemploidata = [];
      this.nbcanceled = 0;
      this.nbcomplete = 0;
      this.nbinprogress = 0;
      this.nbnotstarted = 0;
      this.nbreported = 0;
      this.nbcompleteMois = 0;
      this.totalcompletedata = [];
      this.listparmoisdata = [];
      this.nbfacebook = 0;
      this.nblinkedin = 0
      this.nbemail = 0
      this.nbcondidatspontanne = 0
      this.nbcabinetr = 0
      this.nbsiteofficielle = 0
      this.nbautre = 0
      this.labeldatasource = [];
      this.nbembauche = 0;
      //  if (new Date(this.listdemandeemploie[i].date).getFullYear() == this.form.value.yearchosen) {
//                   this.filteredlistdemandeemploie.push(this.listdemandeemploie[i]);
//                 }



      for (let i = 0; i < this.listdemandeemploie.length; i++) {

        if (new Date(this.listdemandeemploie[i].date).getFullYear() == this.form.value.yearchosen) {
          this.filteredlistdemandeemploie.push(this.listdemandeemploie[i]);
        }

      };
      console.log("****TAILLE****", this.filteredlistdemandeemploie.length)
      for (let i = 0; i < this.filteredlistdemandeemploie.length; i++) {
        console.log("begin for")
        if (this.filteredlistdemandeemploie[i].source == 'FACEBOOK') {
          this.nbfacebook = this.nbfacebook + 1;
          console.log("nbfacbook", this.nbfacebook)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'LINKEDIN') {
          this.nblinkedin = this.nblinkedin + 1;
          console.log("nblinkedin", this.nblinkedin)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'EMAIL') {
          this.nbemail = this.nbemail + 1;
          console.log("nbemail", this.nbemail)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'CONDIDAT_SPONTANE') {
          this.nbcondidatspontanne = this.nbcondidatspontanne + 1;
          console.log("nbcondidatspontanne", this.nbcondidatspontanne)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'CABINET_RECRUTTEMENT') {
          this.nbcabinetr = this.nbcabinetr + 1;
          console.log("nbcabinetr", this.nbcabinetr)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'SITE_OFFICIELLE') {
          this.nbsiteofficielle = this.nbsiteofficielle + 1;
          console.log("nbsiteofficielle", this.nbsiteofficielle)
        }else
        if (this.filteredlistdemandeemploie[i].source == 'AUTRE') {
          this.nbautre = this.nbautre + 1;
          console.log("nbautre", this.nbautre)

        }
        else{

          console.log("*****autre******",this.filteredlistdemandeemploie[i].source)}

      };
      // this.sourceemploidata = [this.nbfacebook.toString(), this.nblinkedin.toString(), this.nbemail.toString(), this.nbcondidatspontanne.toString(),
      // this.nbcabinetr.toString(), this.nbsiteofficielle.toString(), this.nbautre.toString()];
      this.sourceemploidata = [this.nbfacebook, this.nblinkedin, this.nbemail, this.nbcondidatspontanne,
      this.nbcabinetr, this.nbsiteofficielle, this.nbautre];
        this.labeldatasource = ["facebook","linkedin","mail","condidatspontanne","cabinet recruttement","site officielle","autre"]
      console.log("*************SOURCE*********", this.sourceemploidata);

        this.renderapexchart()
      //FILTER LISTE RECRUTTEMENT BY INTERNE EXTERNE
      for(let i =0; i<this.listrecuruttement.length;i++)
      {  if(new Date(this.listrecuruttement[i].date_recruttement).getFullYear()==this.form.value.yearchosen)
        {if(this.listrecuruttement[i].mode_recruttement=="INTERNE"){this.nbinterne=this.nbinterne+1}

      else if(this.listrecuruttement[i].mode_recruttement=="EXTERNE"){this.nbexterne=this.nbexterne+1;}

} else {console.log("not the same year")}
      }
       this.filteddataInterneExterne=[this.nbinterne,this.nbexterne];
       this.labeldatarecruttement=["Interne","Externe"]
       this.barchartapex2();



      console.log("***************INTERNE EXTRENE********",this.filteddataInterneExterne);
      //  this.renderChartInternexterne(['INTERNE','EXTERNE',],this.filteddataInterneExterne,'bar','barchartinternexterne');

//  this.renderChartdoughnut(
//         ['FACEBOOK','LINKEDIN','EMAIL',
//        'CONDIDAT_SPONTANE',
//           'CABINET_RECRUTTEMENT',
//           'SITE_OFFICIELLE',
//           'AUTRE',
//         ],

//         this.sourceemploidata,
//         'doughnut', 'source'
//       );


    }
    console.log("liste decision",this.listdecision)
    for(let i =0; i<this.listrecuruttement.length;i++){

          if (this.listrecuruttement[i].decision=="EMBAUCHE"){
            this.nbembauche=this.nbembauche+1
          }



    }
    this.nbembauche=this.nbembauche+1;
    this.decisionchartdata=[this.nbembauche]
    console.log("nb embauche",this.nbembauche)
    this.donutchartapex();
  }

  removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
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
            label: 'nombre heures',
            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: ['#F89541', 'grey'],
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
  renderChartpie(labeldata: any, maindata: any, type: any, id: any) {
    if (this.mychart4) {
      this.mychart4.destroy();
    }

    this.mychart4 = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'nombre heures',
            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: ['#F89541', 'grey'],
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

  renderChartMois(labeldata: any, maindata: any, type: any, id: any) {
    if (this.mychart5) {
      this.mychart5.destroy();
    }

    this.mychart5 = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'total-complet',
            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: ['#F89541', 'grey'],
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
  // renderChartInternexterne(labeldata: any, maindata: any, type: any, id: any) {
  //   if (this.mychart2) {
  //     this.mychart2.destroy();
  //   }

  //   this.mychart2 = new Chart(id, {
  //     type: type,
  //     data: {
  //       labels: ['INTERNE', 'EXTERNE'],
  //       datasets: [
  //         {
  //           label: 'interne_externe',
  //           data: maindata,
  //           borderWidth: 1,
  //           //  backgroundColor:colordata
  //           backgroundColor: ['#F89541', 'grey'],
  //           type:"bar",
  //           position:"right"
  //         },
  //          {
  //           label: 'itesr',
  //           data:this.sourceemploidata,
  //           borderWidth: 1,
  //           //  backgroundColor:colordata
  //           backgroundColor: ['#F89541', 'red',"blue","green"],
  //           margin:50,
  //           type:"pie",

  //            position:"left"
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //   title: {
  //     display: true,
  //     text: 'Chart.js '
  //   },
  //   hover: {
  //     mode: 'nearest'
  //   },
  //     scales: {
  //       y: {
  //       beginAtZero: true,
  //          },
  //       x:30
  //       },

  //     },
  //   });
  // }

  renderChartdoughnut(labeldata: any, maindata: any, type: any, id: any) {
    if (this.mychart2) {
      this.mychart2.destroy();
    }

    this.mychart2 = new Chart(id, {
      type: type,
      data: {
        labels: [
          'FACEBOOK', 'LINKEDIN', 'EMAIL', 'CONDIDAT_SPONTANE', 'CABINET_RECRUTTEMENT', 'SITE_OFFICIELLE', 'AUTRE',
        ],

        datasets: [
          {
            label: 'Source Emploi',
            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: [
              '#F89541',
              'grey',
              'green',
              'black',
              'yellow',
              'blue',
              'red',
              'brown',
            ],
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






  selectyear() {

    this.demandeemploieservice.affichetous().subscribe(
      (res: any) => {
        this.listdemandeemploie = res; console.log("***/1/**iste demande emploie", this.listdemandeemploie)
        if (this.listdemandeemploie != null) {
          for (let i = 0; i < this.listdemandeemploie.length; i++) {
            if (this.listdemandeemploie[i].date != null) {
              this.yeardata.push(
                new Date(this.listdemandeemploie[i].date).getFullYear()
              );

            }


            this.yeardata2 = this.removeDuplicates(this.yeardata);
            console.log(this.yeardata2, "compteur num", i)
          }


        } else { console.log("liste vide") }
        console.log("year data2", this.yeardata2);




      },
      (error: any) => { console.log("error", error) }
    )
    //LISTE DES RECRUTEMENT
      this.recruttementservice.All().subscribe(
     (res:any)=>{


      this.listrecuruttement=res;console.log("******liste recrutement****",this.listrecuruttement)},
    (error:any)=>{console.log("error",error)}
   )

   // liste decision
this.decisisonservice.affichetous().subscribe(
     (res:any)=>{this.listdecision=res;console.log("liste",this.listdecision)},
    (error:any)=>{console.log("error",error)}
   )



  }


  listRecFunction()
  {

  }

  renderapexchart(){
    this.chartOptions1 = {
      series: this.sourceemploidata,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: this.labeldatasource,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }


  // donutchartapex(){
  //    this.chartOptions2 = {
  //     series: this.decisionchartdata,
  //     chart: {
  //       width: 380,
  //       type: "donut"
  //     },
  //     labels: ["embauche"],
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200
  //           },
  //           legend: {
  //             position: "bottom"
  //           }
  //         }
  //       }
  //     ]
  //   };
  // }
  donutchartapex() {
  this.chartOptions2 = {
    series: this.decisionchartdata,
    chart: {
      width: 380,
      type: "donut"
    },
    labels: ["embauche"],
    colors: ['#f11'], // Set donut slice colors here
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
}

  // barchartapex(){
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Inflation",
  //         data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "bar"
  //     },
  //     plotOptions: {
  //       bar: {
  //         dataLabels: {
  //           position: "top" // top, center, bottom
  //         }
  //       }
  //     },
  //     dataLabels: {
  //       enabled: true,
  //       formatter: function(val) {
  //         return val + "%";
  //       },
  //       offsetY: -20,
  //       style: {
  //         fontSize: "12px",
  //         colors: ["#304758"]
  //       }
  //     },

  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec"
  //       ],
  //       position: "top",
  //       labels: {
  //         offsetY: -18
  //       },
  //       axisBorder: {
  //         show: false
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       crosshairs: {
  //         fill: {
  //           type: "gradient",
  //           gradient: {
  //             colorFrom: "#D8E3F0",
  //             colorTo: "#BED1E6",
  //             stops: [0, 100],
  //             opacityFrom: 0.4,
  //             opacityTo: 0.5
  //           }
  //         }
  //       },
  //       tooltip: {
  //         enabled: true,
  //         offsetY: -35
  //       }
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shade: "light",
  //         type: "horizontal",
  //         shadeIntensity: 0.25,
  //         gradientToColors: undefined,
  //         inverseColors: true,
  //         opacityFrom: 1,
  //         opacityTo: 1,
  //         // stops: [50, 0, 100, 100]
  //       }
  //     },
  //     yaxis: {
  //       axisBorder: {
  //         show: false
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       labels: {
  //         show: false,
  //         formatter: function(val) {
  //           return val + "%";
  //         }
  //       }
  //     },
  //     title: {
  //       text: "Monthly Inflation in Argentina, 2002",
  //       floating: true,
  //       offsetY: 320,
  //       align: "center",
  //       style: {
  //         color: "#444"
  //       }
  //     }
  //   };
  // }


// ListFunction(){
//    this.demandeemploieservice.affichetous().subscribe(result => {
//     console.log("res training in chart",result);
//       this.chartdata = result;
//     console.log("******************data selected *******",this.filteredlist)


//       if(this.chartdata!=null){
//         for(let i=0; i<this.chartdata.length ;i++){
//           console.log(this.chartdata[i].nom);

//           this.yeardata.push(new Date(this.chartdata[i].datedebut).getFullYear());


//           this.yeardata2=this.removeDuplicates(this.yeardata)
//           console.log("*********year data with no duplicate******",this.yeardata2);

//           this.labeldata.push(this.chartdata[i].nom);

//           console.log(this.labeldata);

//           if(this.chartdata[i].type=="INTERNE")


//           {this.nbinterne=this.nbinterne+1}
//           else{this.nbexterne=this.nbexterne+1};
//           console.log("interne",this.nbinterne);
//            console.log("externe",this.nbexterne);
//             console.log("interndata",this.interndata);
//           this.interndata=[this.nbinterne,this.nbexterne];
//           this.realdata.push(this.chartdata[i].nbrhour);
//           // this.colordata.push(this.chartdata[i].colorcode)

// //COMPLETE,EN_COURS,ANNULE,NON_DEBUT,REPORTE
//   if(this.chartdata[i].etat=="COMPLETE"){this.nbcomplete=this.nbcomplete+1 };
//    if(this.chartdata[i].etat=="EN_COURS"){this.nbinprogress=this.nbinprogress+1 };
//   if(this.chartdata[i].etat=="ANNULE"){this.nbcanceled=this.nbcanceled+1 };
//    if(this.chartdata[i].etat=="NON_DEBUT"){this.nbnotstarted=this.nbnotstarted+1 };
//    if(this.chartdata[i].etat=="REPORTE"){this.nbreported=this.nbreported+1 };
//    this.etatformationdata=[this.nbcomplete,this.nbinprogress,this.nbcanceled,this.nbnotstarted,this.nbreported]

//   }//fin boucle for i

//      this.renderChart(this.yeardata,this.realdata,"bar","barchart")
//      this.renderChartpie(this.chartdata,this.realdata,"pie","piechart")
//      this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"pie","piechartinternexterne")
//      this.renderCharhorizontal(['COMPLETE','EN_COURS','ANNULE','NON_DEBUT','REPORTE'],this.etatformationdata,"bar","barhorizontal")


//         }


//     });
//   }


// changeyear2()
// { console.log("****",this.form.value.yearchosen)

// this.filteredlist=[]



//  for(let i=0; i<this.chartdata.length ;i++){
//           console.log(this.chartdata[i].nom);
//  if (new Date(this.chartdata[i].datedebut).getFullYear()==this.form.value.yearchosen)
//  {
//                this.filteredlist.push(this.chartdata[i])

//               //  if(this.filteredlist.length==1)
//               //  {
//               //   console.log("...................mois........",this.mois[new Date(this.filteredlist[this.filteredlist.length].datedebut).getMonth() -1])

//               //  }
//            }


//  }
//  for(let j =0; j<this.filteredlist.length;j++)
//  {
//   console.log("...................mois........",this.mois[new Date(this.filteredlist[j].datedebut).getMonth()])
//    if(this.filteredlist[j].etat=="COMPLETE")
//    {
//     this.nbcompleteMois=this.nbcompleteMois+1;
//    }

//     console.log("###############lnb complete ########",this.nbcompleteMois);
//  }
//  for (let k =0; k<this.filteredlist.length ; k++)
//  {
//   if(new Date(this.filteredlist[k].datedebut).getMonth() != null)
//   {this.listparmoisdata.push(this.nbcompleteMois)}
//   else {this.listparmoisdata.push('0')}

//  }
//  console.log("##############listparmoisdata########",this.listparmoisdata);
//   console.log("###############list choisie########",this.filteredlist);



//       if(this.filteredlist!=null){
//         this.labeldata=[]
//          this.realdata=[]
//          this.nbexterne=0
//          this.nbinterne=0
//          this.decisionfinale=[]
//          this.nbcanceled=0
//          this.nbcomplete=0
//          this.nbinprogress=0
//          this.nbnotstarted=0
//          this.nbreported=0
//          this.nbcompleteMois=0
//          this.totalcompletedata=[]
//          this.listparmoisdata=[]
//         for(let i=0; i<this.filteredlist.length ;i++){
//           //console.log(this.filteredlist[i].nom);

//          // this.yeardata.push(new Date(this.chartdata[i].datedebut).getFullYear());


//          // this.yeardata2=this.removeDuplicates(this.yeardata)
//          // console.log("*********year data with no duplicate******",this.yeardata2);

//           this.labeldata.push(this.filteredlist[i].nom);



//           if(this.filteredlist[i].type=="INTERNE")


//           {this.nbinterne=this.nbinterne+1}
//           else{this.nbexterne=this.nbexterne+1};



//           this.realdata.push(this.filteredlist[i].nbrhour);
//           // this.colordata.push(this.chartdata[i].colorcode)

// //COMPLETE,EN_COURS,ANNULE,NON_DEBUT,REPORTE
//   if(this.filteredlist[i].etat=="COMPLETE"){this.nbcomplete=this.nbcomplete+1 };
//    if(this.filteredlist[i].etat=="EN_COURS"){this.nbinprogress=this.nbinprogress+1 };
//   if(this.filteredlist[i].etat=="ANNULE"){this.nbcanceled=this.nbcanceled+1 };
//    if(this.filteredlist[i].etat=="NON_DEBUT"){this.nbnotstarted=this.nbnotstarted+1 };
//    if(this.filteredlist[i].etat=="REPORTE"){this.nbreported=this.nbreported+1 };
//    this.etatformationdata=[this.nbcomplete,this.nbinprogress,this.nbcanceled,this.nbnotstarted,this.nbreported]

//   }//fin boucle for i
// console.log("label data",this.labeldata);
// console.log("real data",this.realdata);
//   console.log("interne",this.nbinterne);
//            console.log("externe",this.nbexterne);
//              this.interndata=[(this.nbinterne).toString(),(this.nbexterne).toString()];
//              this.totalcompletedata=['0','0,','0',this.nbcomplete]
//              console.log("internadat",this.interndata);
//   // this.renderChart(this.yeardata,this.realdata,"bar","barchart")
//         this.renderChart(this.labeldata,this.realdata,"bar","barchart")
//       this.renderChartpie(this.labeldata,this.realdata,"pie","piechart")
//       this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"pie","piechartinternexterne")
//         // this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"horizontalBar","horizontalBar")
//   // this.renderCharhorizontal(['COMPLETE','EN_COURS','ANNULE','NON_DEBUT','REPORTE'],this.decisionfinale,"bar","barhorizontal")
//    this.renderChartMois(['Jan','Fev','Mar','Avr','Mai','Jui','Juil','Aout','Sep','Oct','Nov','Dec'],this.totalcompletedata,"bar","barmois")
//         }

//  }

renderChartInternexterne(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart2){this.mychart2.destroy()}

      this.mychart2=  new Chart(id, {
      type:type,
      data: {
        labels: ['INTERNE','EXTERNE'],
        datasets: [{
          label: 'interne_externe',
          data: this.filteddataInterneExterne,
          borderWidth: 1,
        //  backgroundColor:colordata
          backgroundColor:["#F89541","grey"]
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


renderCharhorizontal(labeldata:any,maindata:any,type:any,id:any){

if(this.mychart3){this.mychart3.destroy()}

      this.mychart3=new Chart(id,{
  type: type,
  //data: maindata,
   data : {
 labels:labeldata,
  datasets: [{
    indexAxis: 'y',
    label: 'Etat formation',
   // data: [65, 59, 80, 81, 56, 55, 40],
   data:maindata,
    fill: false,
    backgroundColor: [
      '#F89541',
     "grey",


    ],
    borderColor: [
      '#F89541',
     "grey",

    ],
    borderWidth: 1
  }]
},


  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
  },
})
  }


// barchartapex(){
//   this.chartOptions4 = {
//   chart: {
//     type: 'bar'
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true
//     }
//   },
//   series: [{
//     data: [{
//       x: 'category A',
//       y: 10
//     }, {
//       x: 'category B',
//       y: 18
//     }, {
//       x: 'category C',
//       y: 13
//     }]
//   }]
// }
// }

// barchartapex2(){
//    this.chartOptions4 = {
//       series: [
//         {
//           name: "Inflation",
//           data: [ this.nbinterne, this.nbexterne]
//         }
//       ],
//       chart: {
//         height: 350,
//         width: 500,
//         type: "bar"
//       },
//       plotOptions: {
//         bar: {
//           dataLabels: {
//             position: "top" // top, center, bottom
//           }
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         formatter: function(val) {
//           return val + "%";
//         },
//         offsetY: -20,
//         style: {
//           fontSize: "12px",
//           colors: ["#304758"]
//         }
//       },

//       xaxis: {
//         categories: [

//           "Interne",
//           "Externe"
//         ],
//         position: "top",
//         labels: {
//           offsetY: -18
//         },
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         },
//         crosshairs: {
//           fill: {
//             type: "gradient",
//             gradient: {
//               colorFrom: "#D8E3F0",
//               colorTo: "#BED1E6",
//               stops: [0, 100],
//               opacityFrom: 0.4,
//               opacityTo: 0.5
//             }
//           }
//         },
//         tooltip: {
//           enabled: true,
//           offsetY: -35
//         }
//       },
//       fill: {
//         type: "gradient",
//         gradient: {
//           shade: "light",
//           type: "horizontal",
//           shadeIntensity: 0.25,
//           gradientToColors: undefined,
//           inverseColors: true,
//           opacityFrom: 1,
//           opacityTo: 1,
//           stops: [50, 0, 100, 100]
//         }
//       },
//       yaxis: {
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         },
//         labels: {
//           show: false,
//           formatter: function(val) {
//             return val + "%";
//           }
//         }
//       },
//       title: {
//         text: "Monthly Inflation in Argentina, 2002",
//         floating: 0,
//         offsetY: 320,
//         align: "center",
//         style: {
//           color: "#444"
//         }
//       }
//     };
// }


// barchartapex2() {
//   this.chartOptions4 = {
//     series: [
//       {
//         name: "Inflation",
//         data: [this.nbinterne, this.nbexterne]
//       }
//     ],
//     chart: {
//       height: 350,
//       width: 500,
//       type: "bar",
//       color: '#ff0000'
//     },
//     plotOptions: {
//       bar: {
//         dataLabels: {
//           position: "top" // top, center, bottom
//         },
//         color: '#ff0000' // Set the bar color here
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function(val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#ff0000"] // You can keep this for data label colors if needed
//       }
//     },
//     // Rest of your chart options remain the same
//   };
// }

// barchartapex2() {
//   this.chartOptions4 = {
//     series: [
//       {
//         name: "Inflation",
//         data: [this.nbinterne, this.nbexterne]
//       }
//     ],
//     chart: {
//       height: 350,
//       width: 500,
//       type: "bar"
//     },
//     plotOptions: {
//       bar: {
//         dataLabels: {
//           position: "top" // top, center, bottom
//         }
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function(val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"]
//       }
//     },

//     xaxis: {
//       categories: [
//         "Interne",
//         "Externe"
//       ],
//       position: "top",
//       labels: {
//         offsetY: -18
//       },
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       },
//       crosshairs: {
//         fill: {
//           type: "gradient",
//           gradient: {
//             colorFrom: "#D8E3F0",
//             colorTo: "#BED1E6",
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5
//           }
//         }
//       },
//       tooltip: {
//         enabled: true,
//         offsetY: -35
//       }
//     },
//     fill: {
//       // type: "gradient",
//       // gradient: {
//       //   shade: "light",
//       //   type: "horizontal",
//       //   shadeIntensity: 0.25,
//       //   gradientToColors: undefined,
//       //   inverseColors: true,
//       //   opacityFrom: 1,
//       //   opacityTo: 1,
//       //   stops: [50, 0, 100, 100]
//       // }
// //       colors: [
// //   function({ value, seriesIndex, w }) {
// //     return '#F89541'
// //   }
// // ]
//           colors: ['#F89541','#ff0000']
//     },
//     yaxis: {
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       },
//       labels: {
//         show: false,
//         formatter: function(val) {
//           return val + "%";
//         }
//       }
//     },
//     title: {
//       text: "Monthly Inflation in Argentina, 2002",
//       floating: 0,
//       offsetY: 320,
//       align: "center",
//       style: {
//         color: "#F89541" // Nouvelle couleur
//       }
//     }
//   };
// }

// barchartapex2() {
//   this.chartOptions4 = {
//     series: [
//       {
//         name: "Inflation",
//         data: [this.nbinterne, this.nbexterne]
//       }
//     ],
//     chart: {
//       height: 350,
//       width: 500,
//       type: "bar"
//     },
//     plotOptions: {
//       bar: {
//         dataLabels: {
//           position: "top" // top, center, bottom
//         }
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function(val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"]
//       }
//     },

//     xaxis: {
//       categories: [
//         "Interne",
//         "Externe"
//       ],
//       position: "top",
//       labels: {
//         offsetY: -18
//       },
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       },
//       crosshairs: {
//         fill: {
//           type: "gradient",
//           gradient: {
//             colorFrom: "#D8E3F0",
//             colorTo: "#BED1E6",
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5
//           }
//         }
//       },
//       tooltip: {
//         enabled: true,
//         offsetY: -35
//       }
//     },
//     fill: {
//       colors: ["#F89541", "##70FF68"] // Deux couleurs pour les barres
//       // colors: ['#F44336', '#E91E63', '#9C27B0']
//     },
//     yaxis: {
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       },
//       labels: {
//         show: false,
//         formatter: function(val) {
//           return val + "%";
//         }
//       }
//     },
//     title: {
//       text: "Monthly Inflation in Argentina, 2002",
//       floating: 0,
//       offsetY: 320,
//       align: "center",
//       style: {
//         color: "#F89541" // Nouvelle couleur pour le titre
//       }
//     }
//   };
// }

barchartapex2(){
   this.chartOptions4 = {
      series: [
        {
          name: "distibuted",
          data: [this.nbinterne, this.nbexterne]
        }
      ],
      chart: {
        height: 550,
        width:500,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#FEB019",
        "#546E7A",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["Interne"],
          ["Externee"],
        ],
        labels: {
          style: {
            colors: [
              "#FEB019",
              "#546E7A",


            ],
            fontSize: "12px"
          }
        }
      }
    };
}

}

