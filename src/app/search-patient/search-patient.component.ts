import { Component, OnInit } from '@angular/core';
import { fade, slideDown } from "./../animations";


@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
  animations: [fade, slideDown],
})
export class SearchPatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
