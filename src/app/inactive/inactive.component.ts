import { Component, OnInit } from '@angular/core';
import { fade, slideDown } from "./../animations";

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
  animations: [fade, slideDown],
})
export class InactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  } 

}
