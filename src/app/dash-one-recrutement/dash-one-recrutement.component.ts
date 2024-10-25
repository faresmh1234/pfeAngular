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
 // ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexLegend
} from "ng-apexcharts";
import * as ApexCharts from 'apexcharts';


export type ChartOptions1 = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
//  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
    title: ApexTitleSubtitle;
colors:string[]
    responsive?:ApexResponsive[];
};


export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
 colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
    title: ApexTitleSubtitle;
    labels:string[]
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

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  legend:ApexLegend,
  markers:ApexMarkers
  colors: string[];
};

@Component({
  selector: 'app-dash-one-recrutement',
  templateUrl: './dash-one-recrutement.component.html',
  styleUrls: ['./dash-one-recrutement.component.css']
})
export class DashOneRecrutementComponent  {



  @ViewChild("chart") chart: ChartComponent;
  public chartOptions4: any;



  @ViewChild("barchart") barchart: ChartComponent;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions: Partial<ChartOptions>;
    public chartOptions2: Partial<ChartOptions2>;
    public chartOptions5: Partial<ChartOptions5>;

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
  decisionlabeldata: any[]= [];
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
   // this.donutchartapex();
    this.barchartapex2();
     this.barchartapex22();
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


          console.log("*****filteredlistdemandeemploie[i]******",this.filteredlistdemandeemploie[i].source)}



      this.sourceemploidata = [this.nbfacebook, this.nblinkedin, this.nbemail, this.nbcondidatspontanne,
      this.nbcabinetr, this.nbsiteofficielle, this.nbautre];
        this.labeldatasource = ["facebook","linkedin","mail","condidatspontanne","cabinet recruttement","site officielle","autre"]

  console.log("************sourceemploidata*********", this.sourceemploidata);
  console.log("************labeldatasource*********", this.labeldatasource);
        //this.renderapexchart()
        this.renderChartpie(this.labeldatasource,this.sourceemploidata,"pie","idpierec")
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
    for (let j = 0; j < this.listdecision.length; j++) {

        if (new Date(this.listdecision[j].demandeemploie.date).getFullYear() == this.form.value.yearchosen) {


          this.filteredlistdecision.push(this.listdecision[j]);
        }

      };
      console.log("pppppppppppppppppppppp",this.filteredlistdecision)
    for(let i =0; i<this.filteredlistdecision.length;i++){

          if (this.filteredlistdecision[i].decision=="EMBAUCHE"){
            this.nbembauche=this.nbembauche+1
            //REFUSE,PRIORITAIRE,PAS_EMBAUCHE
          }else if (this.filteredlistdecision[i].decision=="REFUSE")
            {this.nbrefuse=this.nbrefuse+1
            console.log("aaaaaaaaaaaaaaaa",this.nbrefuse)
          }else if (this.filteredlistdecision[i].decision=="PRIORITAIRE")
            {this.nbprioritaire=this.nbprioritaire+1
            console.log("aaaaaaaaaaaaaaaa",this.nbprioritaire)
          }else if (this.filteredlistdecision[i].decision=="PAS_EMBAUCHE")
            {this.nbpasembauche=this.nbpasembauche+1
            console.log("aaaaaaaaaaaaaaaa",this.nbpasembauche)}



    }

    this.decisionchartdata=[this.nbembauche,this.nbrefuse,this.nbprioritaire,this.nbpasembauche]
this.decisionlabeldata=["embauche","refuse","prioritaire","pasembauche"]
    //this.donutchartapex();
this.barchartapex22()
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
            backgroundColor: ['#4A2C13','#7d6608','#2c3e50'],
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

            data: maindata,
            borderWidth: 1,
            //  backgroundColor:colordata
            backgroundColor: ['#4A2C13','#7d6608','#2c3e50','#F89541', 'grey','#E1CE9A','#CC5500'],
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




  renderapexchart(){
    this.chartOptions1 = {
      series: this.sourceemploidata,

      chart: {
        width: 380,
        type: "pie"
      },
      fill:{
  colors: ['#AA1', '#F7A', '#4A2C13','#7d6608','#2c3e50','#a569','#e6b']
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


//   donutchartapex() {
//    this.chartOptions2 = {
//     series: this.decisionchartdata,
//     chart: {
//       width: 380,
//       type: "donut"
//     },

//     labels: ["embauche"], // Update this with your actual labels
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
// }
//   }


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
    fill: {
  colors: ['#945927', '#C67734', '#4A2C13'],
},
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


barchartapex2(){
//    this.chartOptions5 = {
//       series: [
//         {
//           name: "distibuted",
//           data: [this.nbinterne, this.nbexterne]
//         }
//       ],
//       chart: {
//         height:350,
//         width:300,
//         type: "bar",
//         events: {
//           click: function(chart, w, e) {
//             // console.log(chart, w, e)
//           }
//         }
//       },
//      fill: {
//   colors: ['#945927', '#C67734', '#4A2C13'],
// },
//       plotOptions: {
//         bar: {
//           columnWidth: "45%",
//           distributed: true
//         }
//       },
//       dataLabels: {
//         enabled: false,
//          style: {
//     colors: ['#945927', '#C67734', '#4A2C13']
//   }
//       },
//       legend: {
//         show: false,

//       },

//       xaxis: {
//           categories: [
//             ["Interne"],
//           ["Externee"],
//         ],
//         labels: {

// style: {

//             fontSize: "0px"
//           }
//         }
//       }
//     };


 //
  this.chartOptions5 = {
      series: [
        {
          name: "distibuted",
           data: [this.nbinterne, this.nbexterne]
        }
      ],
       colors: [
      '#C67734', '#4A2C13'

      ],
      legend: {
       markers:{

           fillColors:['#C67734', '#4A2C13',"#F0F0F2","#936a4f","#cab2a3","#de946c"],

       },


      },
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
     fill:{
       colors: [
      '#C67734', '#4A2C13'

      ],
     },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      markers:{
         colors: [
      '#C67734', '#4A2C13'

      ]
      },
      // grid: {
      //   show: false
      // },
      xaxis: {
        categories: [
          ["Interne"],
          ["Externe"]],



        labels: {
          style: {
            colors: [
             '#C67734', '#4A2C13'

            ],
            fontSize: "12px"
          }
        }
      }
    };


}

barchartapex22(){
 // this.decisionchartdata = [30, 40, 30];
    this.chartOptions2 = {
       // series: this.decisionchartdata,
       series: this.decisionchartdata,
        chart: {
            width: 500,
            type: "donut"
        },
colors: ['#945927', '#C67734', '#4A2C13',"#ff52"],
           fill: {
  colors: ['#945927', '#C67734', '#4A2C13',"#ff52"],
},
 labels: ["embauche","refuse","proritaire","pas embauché"],
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
        show: false,
        //  colors: ['#945927', '#C67734', '#4A2C13']
        position: 'top'
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
            colors: ['#945927', '#C67734', '#4A2C13'],
            fontSize: "12px"
          }
        }
      }
    };
}



// barchartapex22(){

//  this.chartOptions2 = {
//     series: this.decisionchartdata,
//     chart: {
//       width: 380,
//       type: "donut"
//     },
//      fill: {
//   colors: ['#945927'],
// },
//       plotOptions: {
//         bar: {
//           columnWidth: "45%",
//           distributed: true
//         }
//       },

//     labels: ["embauche"], // Update this with your actual labels
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,

//           },
//           legend: {
//             position: "bottom"
//           }
//         }
//       }
//     ]
// }


// }
}
