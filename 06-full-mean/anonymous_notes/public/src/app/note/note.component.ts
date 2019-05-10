import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() notesFormatted: any;
  
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  

}
