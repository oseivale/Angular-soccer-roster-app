import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const routes: Routes = [
	{ path: 'players' , component: PlayerListComponent },
	{ path: 'player/:id' , component: PlayerDetailComponent},
	{path: '', pathMatch: 'full', redirectTo: 'players'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
