import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { luxon, DateTime } from 'luxon'; 
import { notDeepStrictEqual } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  message = ""; 
  notes = [];
  notesFormatted = [];

  ngOnInit(){
    this.getNotesFromService();

  }

  onSubmitNote() {
    let observable = this._http.addNote({message: this.message});
    observable.subscribe(data => {
      if(data['error']) {
        console.log(data['error']);
      } else {
        console.log("message added");
        this.getNotesFromService();
      }
    })
  }

  getNotesFromService(){
    let observable = this._http.getNotes();
    observable.subscribe(data => {
      this.notes = data['notes'];
      this.notesFormatted = [];
      console.log(this.notes);
      for( var i = this.notes.length - 1; i >= 0; i--){
        console.log(this.notes[i]);
        var dt = DateTime.fromISO(this.notes[i].created_at).toLocaleString(DateTime.DATETIME_MED);
        this.notesFormatted.push({message: this.notes[i].message, date: dt});
      }
      console.log(this.notesFormatted);
    })
  }

}
