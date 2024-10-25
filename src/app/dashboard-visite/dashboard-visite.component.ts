import { Component, OnInit } from '@angular/core';
import { VisiteMedicalService } from '../service/visite-medical.service';
import { EmployeService } from '../service/employe.service';
import { Chart, registerables } from 'chart.js';
 Chart.register(...registerables)
@Component({
  selector: 'app-dashboard-visite',
  templateUrl: './dashboard-visite.component.html',
  styleUrls: ['./dashboard-visite.component.css']
})
export class DashboardVisiteComponent implements OnInit{
list:any
listEmp:any
Dates:any
Dates2:any
Dates3:any
total:number=0
listSite:any[]=[]
labeldata:any[]=[]
realdata:any[]=[]
mychart1:any
mylist:any[]=[]
chartdata2:any[]=[]
  constructor(
    private visiteMedicalService:VisiteMedicalService,
    private EmployeService:EmployeService
  ) { }
  ngOnInit(): void {
    this.ListFunction()
    this.ListEmploye()

  }


ListEmploye(){
   this.EmployeService.All().subscribe(
     (res:any)=>{this.listEmp=res;
      console.log("liste",this.list);
      this.total+=this.listEmp.length;
    // Initialize Dates array


    },
    (error:any)=>{console.log("error",error)}
   )
  }

ListFunction(){
   this.visiteMedicalService.AllCategories().subscribe(
     (res:any)=>{this.list=res;console.log("liste",this.list);
    // Initialize Dates array
      this.Dates = [];

      // this.list.forEach((item: any) => {
      //   // Create a Date object using item.date
      //   const date = new Date(item.date_embauche);
      //   const date2 = new Date(item.date_visite)
      //   const date3 = new Date(item.arenouveleavant)
      //   // Get the date components in the desired order (MM/DD/YYYY)
      //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
      //   const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed
      //   const year = date.getFullYear();

      //   const month2 = String(date2.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
      //   const day2 = String(date2.getDate()).padStart(2, '0'); // Pad with leading zero if needed
      //   const year2 = date2.getFullYear();

      //   const month3 = String(date3.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, pad with leading zero if needed
      //   const day3 = String(date3.getDate()).padStart(2, '0'); // Pad with leading zero if needed
      //   const year3 = date3.getFullYear();
      //   // Construct the formatted date string
      //   const formattedDate = `${month}/${day}/${year}`;
      //   const formattedDate2 = `${month2}/${day2}/${year2}`;
      //   const formattedDate3 = `${month3}/${day3}/${year3}`;
      //   // Push the formatted date to the Dates array
      //   this.Dates.push(formattedDate);
      //   this.Dates2.push(formattedDate2);
      //   this.Dates3.push(formattedDate3);


      // });
      const countMap = {};
       let c = new Array(this.list.length).fill(0)
for (let i=0;i<this.list.length;i++){
   const currentname=this.list[i].site;
this.listSite.push(this.list[i].site);


           const index = this.list.findIndex(item => item.site === currentname);
      if (index !== -1) {
        c[index] = (c[index] || 0) + 1;
    }
}

this.realdata = ( Object.values(c).filter(count => count > 0)).map(count => count.toString());
this.mylist=this.removeDuplicates(this.listSite);
this.mylist.map(item=>this.chartdata2.push(item))
      console.log("******this.chartdata2****",this.chartdata2);

      console.log("****realdata****", this.realdata);
      this.renderChart(this.chartdata2,this.realdata,"bar","barchart4")
},
    (error:any)=>{console.log("error",error)}
   )
  }







  removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
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
           backgroundColor:["#00E396","#3F9FFC"]
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
