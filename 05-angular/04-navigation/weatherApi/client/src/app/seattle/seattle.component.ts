import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService
  ) {}

  weather = {};
  main = {};
 
  
  ngOnInit() {
    this.getWeatherData('Seattle');
  }

  getWeatherData(city){
    let observable = this._httpService.getWeather(city);
    observable.subscribe(data => {
      console.log("Got the data!", data);
      this.weather = data['weather'];
      this.main = data['main']
    })
  }
}
