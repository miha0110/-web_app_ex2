import { Component, OnInit } from '@angular/core';
import { fade } from "../../animations";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  animations: [fade],
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
