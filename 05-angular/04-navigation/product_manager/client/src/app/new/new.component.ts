import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id: String;
  title: String;
  price: Number;
  image: String;
  objForUpdate: {};
  errors: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    if(this.id === 'new'){
      this.title = "";
      this.image = "";
    } else {
      this.getProductFromService(this.id);
    }
  }

  getProductFromService(id) {
    console.log(id);
    let observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      console.log(data['product'][0]);
      this.title = data['product'][0].title;
      this.price = data['product'][0].price;
      this.image = data['product'][0].image;
    })
  }

  onSubmit(id) {
    this.objForUpdate = {title: this.title, price: this.price};

    if(this.image !== ""){
      this.objForUpdate["image"] = this.image;
    }

    if(id === 'new') {
      let observable = this._httpService.newProduct(this.objForUpdate);
      observable.subscribe(data => {
        console.log(data);
        if(!data['error']){
          this._router.navigate(['/products']);
        } else {
          this.errors = data['error'];
        }
      })
    } else {
      let observable = this._httpService.updateProduct(this.id, this.objForUpdate);
      observable.subscribe(data => {
        console.log(data);
        if(!data['error']){
          this._router.navigate(['/products']);
        } else {
          this.errors = data['error'];
        }
      })
    }
    
  }

}
