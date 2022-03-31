import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  workHistory = [{
    name: "UBS",
    role: "WSA",
    location: "Cinci"
  },
{
  name: "UC",
  role: "editor",
  location: "cinci"
}]

  constructor() { }

  ngOnInit(): void {
  }

}
