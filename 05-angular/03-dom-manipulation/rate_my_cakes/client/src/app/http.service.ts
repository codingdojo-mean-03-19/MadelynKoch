import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get('/cakes');
  }

  showCake(id) {
    return this._http.get('/cakes/' + id);
  }

  newCake(data) {
    return this._http.post('/cakes', data);
  }

  updateCake(id: String, data) {
    return this._http.put('/cakes/' + id, data);
  }

}
