import { Component, OnInit } from '@angular/core';
import { fade } from "../../animations";

@Component({
  selector: 'app-questioneer',
  templateUrl: './questioneer.component.html',
  styleUrls: ['./questioneer.component.css'],
  animations: [fade],
})
export class QuestioneerComponent implements OnInit {

  que: string="";
  hidden: string ="";
  arrow:string ="";
  arrowup:string ="";

  constructor() { }

  ngOnInit() {
  }

 

  show() {
    
    if(document.getElementById(this.que).style.height === "258px"){
      document.getElementById(this.que).style.height = "44px";
      document.getElementById(this.hidden).style.display = "none";
      document.getElementById(this.arrow).style.display = "inline";
      document.getElementById(this.arrowup).style.display = "none";
    }
    else{
     document.getElementById(this.que).style.height = "258px";
     document.getElementById(this.hidden).style.display = "inline";
     document.getElementById(this.arrow).style.display = "none";
     document.getElementById(this.arrowup).style.display = "inline";
    }
    
  }
  
}
