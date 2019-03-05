import { Component, OnInit } from '@angular/core';
import { fade } from "../../animations";


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
  animations: [fade],
})
export class DiaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
