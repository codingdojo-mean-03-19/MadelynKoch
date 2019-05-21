import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { EditComponent } from './listings/edit/edit.component';

const routes: Routes = [
  { path: 'listings', component: ListingsComponent, children: [
    { path: 'edit', component: EditComponent}
  ] },
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
