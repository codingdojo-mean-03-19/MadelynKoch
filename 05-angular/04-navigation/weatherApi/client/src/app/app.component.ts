import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getWeatherData()
  }

  getWeatherData(){
    let observable = this._httpService.getWeather();
    observable.subscribe(data => {
      console.log("Got the data!", data);
    })
  }
}
