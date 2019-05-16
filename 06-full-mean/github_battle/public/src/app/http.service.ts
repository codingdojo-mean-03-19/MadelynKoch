import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) {}

  getPlayers() {
    return this._http.get('/players');
  }

  addPlayer(data) {
    return this._http.post('/players', data);
  }

  getPlayer(name) {
    console.log("service:", name);
    return this._http.get('/players/' + name);
  }

  getUser(userName) {
    return this._http.get('https://api.github.com/users/' + userName)
  }
}
