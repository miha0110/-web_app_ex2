import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css']
})
export class DateAndTimeComponent implements OnInit {
  now = new Date();
  
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 10000);
   }
  today: string;

  ngOnInit() {
   
  }
  
}
