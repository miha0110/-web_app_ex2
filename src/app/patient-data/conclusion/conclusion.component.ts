import { Component, OnInit } from '@angular/core';
import { fade } from "./../../animations";

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css'],
  animations: [fade],
})
export class ConclusionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
