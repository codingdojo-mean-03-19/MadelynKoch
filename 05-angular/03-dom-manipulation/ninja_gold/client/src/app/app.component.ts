import { Component, OnInit } from '@angular/core';
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
    this.getGoldEarnings();
  }

  goldEarnings = [];

  getGoldEarnings() {
    let observable = this._httpService.getGold();
    observable.subscribe(data => {
      this.goldEarnings = data['golds'];
      console.log(data['golds']);
    })
  }

  processGold(location: String) {
    var num;
    if(location === "farm") {
      num = Math.floor((Math.random() * 10) + 10);
    } else if(location === "cave") {
      num = Math.floor((Math.random() * 5) + 5);
    } else if(location === "house") {
      num = Math.floor((Math.random() * 3) + 2);
    } else {
      num = Math.floor((Math.random() * 100) - 50);
    }
    let observable = this._httpService.processGold({amount: num, location: location});
    observable.subscribe(data => {
      console.log("Got our data!", data );
    })
  }

  onButtonClick(location: String): void{
    this.processGold(location);
    this.getGoldEarnings();
  }
}
