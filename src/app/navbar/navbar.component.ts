import { Component, OnInit } from '@angular/core';
import { slideDown } from "../animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [slideDown]
})
export class NavbarComponent implements OnInit {

  chosen: string;

  constructor() { }

  ngOnInit() {
  }

  morphIcon(){
    if(this.chosen==="inactive"){
     document.getElementById(this.chosen).style.background = "rgba(26,117,187,0.1)";
    }
    else if(this.chosen==="patientData"){
     document.getElementById(this.chosen).style.background = "rgba(26,117,187,0.1)";
    }
    else if(this.chosen==="newPatient"){
     document.getElementById(this.chosen).style.background = "rgba(26,117,187,0.1)";
    }
    else if(this.chosen==="search"){
     document.getElementById(this.chosen).style.background = "rgba(26,117,187,0.1)";
    }
    
   this.defaultIcons();
 }
 
 defaultIcons(){
   if(this.chosen!="inactive"){
     document.getElementById("inactive").style.background = "white";
    }
   if(this.chosen!="patientData"){
     document.getElementById("patientData").style.background = "white";
    }
   if(this.chosen!="newPatient"){
     document.getElementById("newPatient").style.background = "white";
    }
   if(this.chosen!="search"){
     document.getElementById("search").style.background = "white";
    }
 } 
}
