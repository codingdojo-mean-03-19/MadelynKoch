import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService
  ) {}

  weather = [{}];
  main = {};
 
  
  ngOnInit() {
    this.getWeatherData('Dallas');
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