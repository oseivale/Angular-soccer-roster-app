import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { Player } from 'src/app/shared/player.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
	
list: Player[];
  constructor(private service: PlayerService, private firestore:AngularFirestore,
  private toastr:ToastrService ) { }

  ngOnInit() {
  	this.service.getPlayers().subscribe(actionArray => {
  	this.list = actionArray.map(item => {
  		return { 
  		id: item.payload.doc.id,
  		...item.payload.doc.data() 
  			} as Player;
  		}) 
  	});
  }

  onEdit(player:Player){
  	this.service.formData = Object.assign({}, player);

  }

  onDelete(id:string){
  	if(confirm("Are you sure you want to delete this record?")){
  	this.firestore.doc('players/'+ id).delete();
  	this.toastr.warning('Deleted successfully', 'Player Registration');
  	}
  }

}
