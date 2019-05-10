import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { LuxonModule } from 'luxon-angular';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full'},
  { path: 'notes', component: NoteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LuxonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
