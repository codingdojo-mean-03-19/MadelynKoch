import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './players/home/home.component';
import { NewComponent } from './players/new/new.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', redirectTo: '/players/list', pathMatch: 'full'},
  { path: 'players', component: PlayersComponent, children: [
    { path: 'list', component: HomeComponent },
    { path: 'addplayer', component: NewComponent}
  ] },
  { path: 'status/game/:id', component: StatusComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
