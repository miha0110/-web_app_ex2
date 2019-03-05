import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { fade, slideDown } from "./../animations";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css'],
  animations: [fade, slideDown],
})
export class PatientDataComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  sidebar(){
    this.zone.run(() =>  this.router.navigate(['/navbar/sidebar/main']));
  }

  edit(){
    this.zone.run(() =>  this.router.navigate(['/navbar/editPatient']));
  }

}
