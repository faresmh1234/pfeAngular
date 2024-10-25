import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PresenceService } from '../service/presence.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  date:any
  currentDate: string;
  list:any
  constructor(
    private presenceService:PresenceService) { }

  ngOnInit(): void {

  }

   ListFunction() {
    console.log("list function")
    this.presenceService.stagiairepresents(this.date).subscribe(
      (res: any) => {
        this.list = res;
        console.log('liste', this.list);

      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

}
