import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor( 
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  listing = {'title': '', 'price': '', 'desc': '', 'location': '', 'img_url': ''};
  listings = []

  ngOnInit() {
    this.getListingsFromService();
  }

  addNewListing(){
    let observable = this._httpService.addListing(this.listing);
    observable.subscribe(data => {
      if(data['err']){
        console.log(data['err']);
      } else {
        console.log("successfully added listing");
        this.getListingsFromService();
        this.listing = {'title': '', 'price': '', 'desc': '', 'location': '', 'img_url': ''};
      }
    })
  }

  getListingsFromService(){
    let observable = this._httpService.getListings();
    observable.subscribe(data => {
      if(data['err']){
        console.log(data['err']);
      } else {
        this.listings = data['listings'];
      }
    })
  }

  refreshPage(){
    console.log("Refreshing the page");
    this.getListingsFromService();
  }
}
