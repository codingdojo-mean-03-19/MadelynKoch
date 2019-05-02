import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  newCake: any;
  review: any;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.newCake = {baker: "", imageUrl: ""}
    this.review = {rating: 5, comment: ""}
    this.getCakesFromService();
  }

  cakes = [];
  cake = {};
  showCakeDetail = false;

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got the cakes!", data);
      this.cakes = data['cakes'];
    })
  }

  getCake(id: String){
    let observable = this._httpService.showCake(id);
    observable.subscribe(data => {
      console.log("Got the cake", data);
      this.cake = data['cake'];
    })
  }

  onSubmitNewCake() {
    let observable = this._httpService.newCake(this.newCake);
    observable.subscribe(data => {
      console.log("New cake!", data);
      this.getCakesFromService();
    })
    this.newCake = {baker: "", imageUrl: ""};
  }

  onSubmitUpdateCake(id: String) {
    let observable = this._httpService.updateCake(id, this.review);
    observable.subscribe(data => {
      console.log("New review", data);
      this.getCakesFromService();
    })
    this.review = {rating: 5, comment: ""}
  }

  cakeToShow(cake: object) {
    this.showCakeDetail = true;
    this.cake = cake;
  }
}
