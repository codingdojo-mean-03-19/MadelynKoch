import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { PlayerComponent } from './battle/player/player.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', redirectTo: '/battle/player', pathMatch: 'full'},
  { path: 'battle', component: BattleComponent, children: [
    { path: 'player', component: PlayerComponent },
    { path: 'results', component: ResultsComponent }
  ]},
  { path: 'rankings', component: RankingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
