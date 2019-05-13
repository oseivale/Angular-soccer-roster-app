import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

fullNames=[];

addPlayer(firstName, lastName, gender){

			this.fullNames.push(firstName + " " + lastName + " " + gender)
			
	}


deleteItem(item){
	for(let i=0; i <= this.fullNames.length; i++){
			 if(item == this.fullNames[i]){
	  		
	  		this.fullNames.splice(i, 1)
	  		
	  	}
	}
  }

  constructor() { }

  ngOnInit() {
  }

} 
