import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Soccer Roster';
  firstNames=[];

  addPlayer(value1, value2){
  	this.firstNames.push(value1, value2)
  }
}
