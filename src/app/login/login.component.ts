import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";


 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  login(){
    this.zone.run(() =>  this.router.navigate(['/navbar/patientData']));
  }
} 
