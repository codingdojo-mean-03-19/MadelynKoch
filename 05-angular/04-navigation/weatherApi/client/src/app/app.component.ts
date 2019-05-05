import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  city = "";
  weather = [{description: 'pending'}];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    
  }
}
