import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getGold() {
    return this._http.get('/gold');
  }

  processGold(data) {
    return this._http.post('/gold', data);
  }

  constructor(private _http: HttpClient) { }
}
