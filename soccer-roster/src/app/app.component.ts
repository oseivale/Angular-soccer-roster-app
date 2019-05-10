import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Soccer Roster';
  fullNames=[];


  addPlayer(firstName, lastName){
  	this.fullNames.push(firstName + " " + lastName)

	}

deleteItem(item){
	for(let i=0; i <= this.fullNames.length; i++){
			 if(item == this.fullNames[i]){
	  		
	  		this.fullNames.splice(i, 1)
	  		
	  	}
	}
  }
 }

