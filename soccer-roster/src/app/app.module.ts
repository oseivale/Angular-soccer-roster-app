import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AddPlayerComponent } from './add-player/add-player.component';


const appRoutes: Routes = [
	{
		path: 'player-detail',
		component: PlayerDetailComponent
	},
  {
    path: 'add-player',
    component: AddPlayerComponent
  },
	{
		path: 'player-list',
		component: PlayerListComponent
	},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    AddPlayerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
