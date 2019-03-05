import { Component, OnInit } from '@angular/core';
import { fade } from "./../animations";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
  animations: [fade],
})
export class EditPatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
