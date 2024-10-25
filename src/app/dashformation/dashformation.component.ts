import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { TrainingService } from '../service/training.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 Chart.register(...registerables)

@Component({
  selector: 'app-dashformation',
  templateUrl: './dashformation.component.html',
  styleUrls: ['./dashformation.component.css']
})
export class DashformationComponent implements OnInit{
  nbformation=0;
    chartdata:any
labeldata:any[]=[]
labeldataname:any[]=[]
realdata:any[]=[]
colordata:any[]=[]
lisTrainings:any
interndata:any[]=[]
 nbinterne=0
 nbexterne=0
 nbcomplete=0
 nbcanceled=0
 nbinprogress=0
 nbnotstarted=0
 nbreported=0
 etatformationdata:any[]=[]
listyears:any
t:any
form:FormGroup
yeardata:any[]=[]
yeardata2:any[]=[]
annee:any
condition=true
public value=""
filteredlist:any[]=[]
mychart1:any
mychart2:any
mychart3:any
mychart4:any
mychart5:any
totalcompletedata:any[]=[]
listparmoisdata:any[]=[]
 mois=['Jan','Fev','Mar','Avr','Mai','Jui','Juil','Aout','Sep','Oct','Nov','Dec']
//array ['mail','Avr','mail]
//resultat [0,0,0,nb,]
nbcompleteMois=0
chart:any

constructor(
  private trainingService:TrainingService,
    private formbuilder:FormBuilder
){}
ngOnInit(): void {
   //this.mychart.destroy()
this.ListFunction()
    this.form=this.formbuilder.group({
      yearchosen:['',Validators.required]
    })


}
changeyear()
{ console.log("****",this.form.value.yearchosen)

this.filteredlist=[]

this.nbformation=0;


if (this.form.value.yearchosen=="tout"){

  for(let i=0; i<this.chartdata.length ;i++){


               this.filteredlist.push(this.chartdata[i])
                this.nbformation=this.nbformation+1
              //  if(this.filteredlist.length==1)
              //  {
              //   console.log("...................mois........",this.mois[new Date(this.filteredlist[this.filteredlist.length].datedebut).getMonth() -1])

              //  }



 }

}else {

 for(let i=0; i<this.chartdata.length ;i++){
          console.log(this.chartdata[i].nom);
 if (new Date(this.chartdata[i].datedebut).getFullYear()==this.form.value.yearchosen)
 {
               this.filteredlist.push(this.chartdata[i])
                this.nbformation=this.nbformation+1
              //  if(this.filteredlist.length==1)
              //  {
              //   console.log("...................mois........",this.mois[new Date(this.filteredlist[this.filteredlist.length].datedebut).getMonth() -1])

              //  }
           }


 }
 }



 for(let j =0; j<this.filteredlist.length;j++)
 {
  console.log("...................mois........",this.mois[new Date(this.filteredlist[j].datedebut).getMonth()])
   if(this.filteredlist[j].etat=="COMPLETE")
   {
    this.nbcompleteMois=this.nbcompleteMois+1;
   }

    console.log("###############lnb complete ########",this.nbcompleteMois);
 }
 for (let k =0; k<this.filteredlist.length ; k++)
 {
  if(new Date(this.filteredlist[k].datedebut).getMonth() != null)
  {this.listparmoisdata.push(this.nbcompleteMois)}
  else {this.listparmoisdata.push('0')}

 }
 console.log("##############listparmoisdata########",this.listparmoisdata);
  console.log("###############list choisie########",this.filteredlist);



      if(this.filteredlist!=null){
        this.labeldata=[]
         this.realdata=[]
         this.nbexterne=0
         this.nbinterne=0
         this.etatformationdata=[]
         this.nbcanceled=0
         this.nbcomplete=0
         this.nbinprogress=0
         this.nbnotstarted=0
         this.nbreported=0
         this.nbcompleteMois=0
         this.totalcompletedata=[]
         this.listparmoisdata=[]
        for(let i=0; i<this.filteredlist.length ;i++){
          //console.log(this.filteredlist[i].nom);

         // this.yeardata.push(new Date(this.chartdata[i].datedebut).getFullYear());


         // this.yeardata2=this.removeDuplicates(this.yeardata)
         // console.log("*********year data with no duplicate******",this.yeardata2);

          this.labeldata.push(this.filteredlist[i].nom);



          if(this.filteredlist[i].type=="INTERNE")


          {this.nbinterne=this.nbinterne+1}
          else{this.nbexterne=this.nbexterne+1};



          this.realdata.push(this.filteredlist[i].nbrhour);
          // this.colordata.push(this.chartdata[i].colorcode)

//COMPLETE,EN_COURS,ANNULE,NON_DEBUT,REPORTE
  if(this.filteredlist[i].etat=="COMPLETE"){this.nbcomplete=this.nbcomplete+1 };
   if(this.filteredlist[i].etat=="EN_COURS"){this.nbinprogress=this.nbinprogress+1 };
  if(this.filteredlist[i].etat=="ANNULE"){this.nbcanceled=this.nbcanceled+1 };
   if(this.filteredlist[i].etat=="NON_DEBUT"){this.nbnotstarted=this.nbnotstarted+1 };
   if(this.filteredlist[i].etat=="REPORTE"){this.nbreported=this.nbreported+1 };
   this.etatformationdata=[this.nbcomplete,this.nbinprogress,this.nbcanceled,this.nbnotstarted,this.nbreported]

  }//fin boucle for i
console.log("label data",this.labeldata);
console.log("real data",this.realdata);
  console.log("interne",this.nbinterne);
           console.log("externe",this.nbexterne);
             this.interndata=[(this.nbinterne).toString(),(this.nbexterne).toString()];
             this.totalcompletedata=['0','0,','0',this.nbcomplete]
             console.log("internadat",this.interndata);
  // this.renderChart(this.yeardata,this.realdata,"bar","barchart")
        this.renderChart(this.labeldata,this.realdata,"bar","barchart")
      this.renderChartpie(this.labeldata,this.realdata,"pie","piechart")
      this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"pie","piechartinternexterne")
        // this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"horizontalBar","horizontalBar")
  this.renderCharhorizontal(['COMPLETE','EN_COURS','ANNULE','NON_DEBUT','REPORTE'],this.etatformationdata,"bar","barhorizontal")
   this.renderChartMois(['Jan','Fev','Mar','Avr','Mai','Jui','Juil','Aout','Sep','Oct','Nov','Dec'],this.totalcompletedata,"bar","barmois")
        }

            var monthlyData = this.groupTrainingByMonth(this.filteredlist);
console.log("monthlyData",monthlyData);
  const labels = Object.keys(monthlyData);
  //alert(labels)
  const totalData = labels.map(month => monthlyData[month].total);
  const completedData = labels.map(month => monthlyData[month].completed);
//alert(totalData)
console.log("totalData",totalData);
console.log("completedData",completedData)
 this.renderChartMoisComplete(labels,totalData,completedData,"bar","idtotalComplete");
console.log("labels",labels)
 }


removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

 renderChartMoisComplete(labeldata: any, maindata: any, secondaryData: any, type: any, id: any) {

  if (this.mychart1) {
    this.mychart1.destroy();
  }

  this.mychart1 = new Chart(id, {
    type: type,
    data: {
      labels: labeldata,
      datasets: [
        {
          label: 'Total Trainings',
          data: maindata,
          borderWidth: 1,
          backgroundColor: '#C67734', // Primary dataset color
        },
        {
          label: 'Completed Trainings', // Label for the second dataset
          data: secondaryData, // Data for the second dataset
          borderWidth: 1,
          backgroundColor: '#4A2C13', // Secondary dataset color
        }
      ]
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
  renderChart(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart1){this.mychart1.destroy()}

       this.mychart1=   new Chart(id, {
      type:type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'nombre heures',
          data: maindata,
          borderWidth: 1,
        //  backgroundColor:colordata
       backgroundColor:[ '#C67734', '#4A2C13',"#F0F0F2"]
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
   renderChartpie(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart4){this.mychart4.destroy()}

       this.mychart4=   new Chart(id, {
      type:type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'nombre heures',
          data: maindata,
          borderWidth: 1,
        //  backgroundColor:colordata
          backgroundColor:[ '#C67734', '#4A2C13',"#F0F0F2","#936a4f","#cab2a3","#de946c"]
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

   renderChartMois(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart5){this.mychart5.destroy()}

       this.mychart5=   new Chart(id, {
      type:type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'total-complet',
          data: maindata,
          borderWidth: 1,
          backgroundColor:[ '#C67734', '#4A2C13',"#F0F0F2"]
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
 renderChartInternexterne(labeldata:any,maindata:any,type:any,id:any){
if(this.mychart2){this.mychart2.destroy()}

      this.mychart2=  new Chart(id, {
      type:type,
      data: {
        labels: ['INTERNE','EXTERNE'],
        datasets: [{
          label: 'interne_externe',
          data: maindata,
          borderWidth: 1,
       backgroundColor:[ '#C67734', '#4A2C13',"#F0F0F2"]
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
     backgroundColor:[ '#C67734', '#4A2C13',"#F0F0F2"],
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

 ListFunction(){
   this.trainingService.AllCategories().subscribe(result => {
    console.log("res training in chart",result);
      this.chartdata = result;
    console.log("******************data selected *******",this.filteredlist)


      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          console.log(this.chartdata[i].nom);

          this.yeardata.push(new Date(this.chartdata[i].datedebut).getFullYear());


          this.yeardata2=this.removeDuplicates(this.yeardata)
          console.log("*********year data with no duplicate******",this.yeardata2);

          this.labeldata.push(this.chartdata[i].nom);


          if(this.chartdata[i].type=="INTERNE")


          {this.nbinterne=this.nbinterne+1}
          else{this.nbexterne=this.nbexterne+1};
          console.log("interne",this.nbinterne);
           console.log("externe",this.nbexterne);
            console.log("interndata",this.interndata);
          this.interndata=[this.nbinterne,this.nbexterne];
          this.realdata.push(this.chartdata[i].nbrhour);
          // this.colordata.push(this.chartdata[i].colorcode)

//COMPLETE,EN_COURS,ANNULE,NON_DEBUT,REPORTE
  if(this.chartdata[i].etat=="COMPLETE"){this.nbcomplete=this.nbcomplete+1 };
   if(this.chartdata[i].etat=="EN_COURS"){this.nbinprogress=this.nbinprogress+1 };
  if(this.chartdata[i].etat=="ANNULE"){this.nbcanceled=this.nbcanceled+1 };
   if(this.chartdata[i].etat=="NON_DEBUT"){this.nbnotstarted=this.nbnotstarted+1 };
   if(this.chartdata[i].etat=="REPORTE"){this.nbreported=this.nbreported+1 };
   this.etatformationdata=[this.nbcomplete,this.nbinprogress,this.nbcanceled,this.nbnotstarted,this.nbreported]

  }//fin boucle for i

     this.renderChart(this.yeardata,this.realdata,"bar","barchart")
     this.renderChartpie(this.labeldata,this.realdata,"pie","piechart")
     this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"pie","piechartinternexterne")
     this.renderCharhorizontal(['COMPLETE','EN_COURS','ANNULE','NON_DEBUT','REPORTE'],this.etatformationdata,"bar","barhorizontal")


        }


    });
  }


  //dashboard

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "Sales",
            data: ['5','5', '5', '5', '5',
								 '5', '5', '5'],
            backgroundColor: 'grey'
          },
          {
            label: "Profit",
            data: ['5', '5', '5', '5', '5',
									 '5', '5', '5'],
             backgroundColor:["#00E396","#3F9FFC","#F0F0F2"]
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });



  }
private groupTrainingByMonth(trainingData: any[]) {
 // const monthlyData = {};
  const monthlyData: { [key: string]: { total: number; completed: number } } = {};
  const monthsOfYear = [
     'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];
monthsOfYear.forEach(month => {
    monthlyData[month] = { total: 0, completed: 0 };
  });

  trainingData.forEach(training => {

    const month = new Date(training.datefin).toLocaleString('default', { month: 'long'});

console.log("Month",month)
    if (!monthlyData[month]) {
      monthlyData[month] = { total: 0, completed: 0 };
    }

    monthlyData[month].total += 1;

    if (training.etat=="COMPLETE") {
      monthlyData[month].completed += 1;
    }

  });

  return monthlyData;
}

}
