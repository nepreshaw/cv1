import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv1';
  name: string = "Nick";
  contact: string = "123 Address"
  tech: string[] = ["Java", "Spring", "Git"];

education = [{
  school: "UC",
  degree: "eng",
  year: "2017"
}]

}

