import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

getWeather() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=4bc6c0475d9fe8817e88d9e1e539cde0');
  }
}
