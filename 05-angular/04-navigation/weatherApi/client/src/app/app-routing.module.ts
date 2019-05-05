import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/seattle', pathMatch: 'full'},
  { path: 'seattle', component: SeattleComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'washington-dc', component: WashingtonDcComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
