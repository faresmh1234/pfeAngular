import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg, formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { TrainingService } from '../service/training.service';
import { event } from 'jquery';

@Component({
  selector: 'app-test-calendar',
  templateUrl: './test-calendar.component.html',
  styleUrls: ['./test-calendar.component.css']
})
export class TestCalendarComponent implements OnInit {

  calendarOptions?: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;

  constructor(private trainingService:TrainingService) { }
  lisTrainings:any
  newlist:any []=[]
  list2:any
  array:any[] = [];
  ngOnInit() {
    this.loadEvents()
    // need for load calendar bundle first
    forwardRef(() => Calendar);
  this.ListFunction();


  // this.calendarOptions = {
  //     plugins: [dayGridPlugin],
  //     editable: true,
  //     customButtons: {
  //       myCustomButton: {
  //         text: 'custom!',
  //         click: function () {
  //           alert('clicked the custom button!');
  //         }
  //       }
  //     },
  //     initialView: 'dayGridMonth',
  //     weekends: false,
  //     headerToolbar: {
  //           left: 'prev,next today myCustomButton',
  //            center: 'title',
  //            right: 'dayGridMonth'
  //        },

  //    events:this.newlist


  // }
  // console.log('listttttttttttttttt'+this.list2)
}


  updateHeader() {
    this.calendarOptions!.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions!.events = [{
      title: 'Updated Event',
      start: yearMonth + '-08',
      end: yearMonth + '-10'
    }];
  }

  ListFunction(){
   this.trainingService.AllCategories().subscribe(
     (res:any)=>{this.lisTrainings=res;console.log("liste",this.lisTrainings);

     this.lisTrainings.map((item:any)=>{this.newlist.push({
      "title":item.nom,
      // "start":formatDate(item.datedebut, {
      //     year: "numeric",
      //     month: "numeric",
      //     day: "numeric"
      //   }),
      //    "end":formatDate(item.datefin, {
      //     year: "numeric",
      //     month: "numeric",
      //     day: "numeric"
      //   }),
     //"start":new Date(item.datedebut).getFullYear()+','+(new Date(item.datedebut).getMonth()+1).toString().padStart(2, '0')+','+new Date(item.datedebut).getDay().toString().padStart(2, '0'),
    // "end":new Date(item.datefin).getFullYear()+','+(new Date(item.datefin).getMonth()+1).toString().padStart(2, '0')+','+new Date(item.datefin).getDay().toString().padStart(2, '0')
          start: formatDate(item.datedebut, { year: 'numeric', month: 'numeric', day: 'numeric' }),
          end: formatDate(item.datefin, { year: 'numeric', month: 'numeric', day: 'numeric' })
    })})
console.log("liste",this.newlist)
console.log("type ma liste",typeof(this.newlist))
this.list2=Array.from(this.newlist);
    },
    (error:any)=>{console.log("error",error)}
   )

   this.calendarOptions = {
      plugins: [dayGridPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      initialView: 'dayGridMonth',
      weekends: false,
      headerToolbar: {
            left: 'prev,next today myCustomButton',
             center: 'title',
             right: 'dayGridMonth'
         },

     events:this.newlist


  }


  }



  loadEvents() {
    console.log("debut load event")
    this.trainingService.AllCategories().subscribe(
      (res: any[]) => { // Ensure response is an array
        this.eventsModel = res.map(item => ({
          title: item.nom,
          start: formatDate(item.datedebut, { year: 'numeric', month: 'numeric', day: 'numeric' }),
          end: formatDate(item.datefin, { year: 'numeric', month: 'numeric', day: 'numeric' })
        }));
        console.log(res)
        console.log("type res =",typeof res)
        this.array=res
        console.log(this.array)
      },
      (error: any) => {
        console.error('Error loading events:', error);
      }
    );
console.log("fin load event")
  }

}
