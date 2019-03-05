import { Component, OnInit } from '@angular/core';
import { slideRight } from "../../animations";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [slideRight]
})
export class LeftSidebarComponent implements OnInit {

  chosen: string;

  constructor() { }

  ngOnInit() {
  }
  
  morphIcon(){
     if(this.chosen==="messages"){
      document.getElementById(this.chosen)['src'] = "../../assets/messages_press.png";
     }
     else if(this.chosen==="conclution"){
      document.getElementById(this.chosen)['src'] = "../../assets/conclution_press.png";
     }
     else if(this.chosen==="diary"){
      document.getElementById(this.chosen)['src'] = "../../assets/diary_press.png";
     }
     else if(this.chosen==="questioneer"){
      document.getElementById(this.chosen)['src'] = "../../assets/questioneer_press.png";
     }
     else if(this.chosen==="report"){
      document.getElementById(this.chosen)['src'] = "../../assets/reports_press.png";
     }
     else if(this.chosen==="graph"){
      document.getElementById(this.chosen)['src'] = "../../assets/graphs_press.png";
     }
     this.defaultIcons();
  }
  
  defaultIcons(){
    if(this.chosen!="messages"){
      document.getElementById("messages")['src'] = "../../assets/messages_reg.png";
     }
    if(this.chosen!="conclution"){
      document.getElementById("conclution")['src'] = "../../assets/conclution_reg.png";
     }
    if(this.chosen!="diary"){
      document.getElementById("diary")['src'] = "../../assets/diary_reg.png";
     }
    if(this.chosen!="questioneer"){
      document.getElementById("questioneer")['src'] = "../../assets/questioneer_reg.png";
     }
    if(this.chosen!="report"){
      document.getElementById("report")['src'] = "../../assets/reportsl_reg.png";
     }
    if(this.chosen!="graph"){
      document.getElementById("graph")['src'] = "../../assets/graphsl_reg.png";
     }
  }
}
