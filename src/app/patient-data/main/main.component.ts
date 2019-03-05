import { Component, OnInit } from '@angular/core';
import { fade } from "../../animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fade],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
