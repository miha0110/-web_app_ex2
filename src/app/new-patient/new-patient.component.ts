import { Component, OnInit } from '@angular/core';
import { fade } from "./../animations";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
  animations: [fade],
})
export class NewPatientComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

}
