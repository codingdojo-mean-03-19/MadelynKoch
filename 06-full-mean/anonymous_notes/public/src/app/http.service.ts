import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  getNotes(){
    return this._http.get('/api/notes');
  }
  
  addNote(data) {
    return this._http.post('/api/notes', data);
  }
}
