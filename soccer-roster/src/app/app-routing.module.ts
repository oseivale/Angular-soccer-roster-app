import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AddPlayerComponent } from './add-player/add-player.component';


const appRoutes: Routes = [
	{ path: 'add-player', component: AddPlayerComponent },
	{ path: 'player-list' , component: PlayerListComponent },
	{ path: 'player-detail' , component: PlayerDetailComponent},
	{ path: '', redirectTo: '/add-player', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true }
  	)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
