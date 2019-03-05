import { Component, OnInit } from '@angular/core';
import { slideDown } from "../animations";
@Component({
  selector: 'app-hello-dr',
  templateUrl: './hello-dr.component.html',
  styleUrls: ['./hello-dr.component.css'],
  animations: [slideDown]
})
export class HelloDrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show() {
    if(document.getElementById("edit_bar").style.display === "block"){
      document.getElementById("edit_bar").style.display = "none";
    }
    else{
      document.getElementById("edit_bar").style.display = "block";
    }
  }
}
