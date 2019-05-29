import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
	formData : Player;

  constructor(private firestore:AngularFirestore) { }

  getPlayers(){
  	return this.firestore.collection('players').snapshotChanges()
  }
}
