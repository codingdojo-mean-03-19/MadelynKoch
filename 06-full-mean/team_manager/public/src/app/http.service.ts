import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayers(){
    return this._http.get('/players');
  }

  addPlayer(data){
    return this._http.post('/players', data);
  }

  deletePlayer(id){
    return this._http.delete('/players/' + id);
  }

  updatePlayer(id, data) {
    console.log(data);
    return this._http.put('/players/' + id, data);
  }
}
