import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor( private service : PlayerService, private firestore : AngularFirestore, 
  private toastr : ToastrService ) { }

  ngOnInit() {
  	this.resetForm();
  }

  resetForm( form? : NgForm ){
  if( form != null )
  	form.resetForm();
  	  	this.service.formData = {
  	  		id : null,
  	  		fullName : '',
  	  		jerseyNumber : '',
  	  		position : '',
  	  		teamName : ''
  	}
  }

  onSubmit(form:NgForm){
  	let data = Object.assign({}, form.value); 
  	delete data.id;
  	if(form.value.id == null)
  		this.firestore.collection('players').add(data);
  	else
  	this.firestore.doc('players/'+ form.value.id).update(data);
  		this.resetForm(form);
  	this.toastr.success('Submitted successfully', 'Player Registration');
  }

}
