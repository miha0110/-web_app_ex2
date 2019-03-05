import { Component, OnInit } from '@angular/core';
import { fade } from "../../animations";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [fade],
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
