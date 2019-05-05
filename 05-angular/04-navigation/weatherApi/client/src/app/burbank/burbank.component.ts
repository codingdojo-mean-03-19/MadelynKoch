import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService
  ) {}

  weather = [{}];
  main = {};
 
  
  ngOnInit() {
    this.getWeatherData('Burbank');
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