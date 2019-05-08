import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new/:id', component: NewComponent},
  { path: 'quotes/:id', component: QuotesComponent},
  { path: 'write/:id', component: QuoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
