import { Component, OnInit, ViewChild } from '@angular/core';
import { StageService } from '../service/stage.service';
import { StagiaireService } from '../service/stagiaire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-stage',
  templateUrl: './dashboard-stage.component.html',
  styleUrls: ['./dashboard-stage.component.css']
})
export class DashboardStageComponent implements OnInit{

  liststage:any
  liststagiaire:any
  filteredlist: any[] = [];
  filteredliststage: any[] = [];
  filteredliststagiaire: any[] = [];
  yearchosen:any
  yeardata: any[] = [];
  yeardata2: any[] = [];
  form: FormGroup;
  nbinterne = 0
  nbexterne = 0
  nbcomplete = 0
  nbpasencore = 0
  nbnondebut = 0;
  nbmasculin=0;
  nbfeminin= 0;
  nbstage=0;
  nbstagiaire=0;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any

    @ViewChild("chart") piechart: ChartComponent;
  public chartOptions2: any;

constructor(private stageservice:StageService,
  private stagiaireservice:StagiaireService,
  private formbuilder: FormBuilder
){}

ngOnInit(): void {
  this.apexpiechart();
  this.selectyear();
  this.apexhorizontalbarchart();
this.form = this.formbuilder.group({
      yearchosen: ['', Validators.required],
    });
}

  changeyear() {



    this.filteredlist = [];
     this.filteredliststage = [];
     this.filteredliststagiaire = [];



      this.nbinterne=0
      this.nbexterne=0
      this.nbcomplete=0
      this.nbpasencore=0
      this.nbnondebut = 0
      this.nbmasculin =0
      this.nbfeminin = 0
      this.nbstage =0
      this.nbstagiaire=0




      for (let i = 0; i < this.liststage.length; i++) {

        if (new Date(this.liststage[i].date_debut).getFullYear() == this.form.value.yearchosen) {
          this.filteredliststage.push(this.liststage[i]);
        }

      };
      console.log("filtered list stage",this.filteredliststage)
      console.log("****TAILLE****", this.filteredliststage.length)
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

     console.log("nb stage complet",this.nbcomplete)
     console.log("nb stage non complet",this.nbpasencore)
     console.log("nb stage non debut",this.nbnondebut)
     console.log("nb stagiaire feminun",this.nbfeminin)
     console.log("nb stagiaire masculin",this.nbmasculin)

      this.apexhorizontalbarchart();
      this.apexpiechart();
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



  }

  removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }



  apexhorizontalbarchart(){

    this.chartOptions = {
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

    this.chartOptions2 = {
      series: [this.nbmasculin,this.nbfeminin],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["MASUCULIN", "FEMININ"],
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

}
