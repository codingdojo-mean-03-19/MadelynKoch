import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  products = [];

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got the products!");
      this.products = data['products'];
    })
  }

  deleteOnClick(id) {
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Deleted!");
      this.getProductsFromService();
    })
  }
}
