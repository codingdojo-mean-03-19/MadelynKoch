import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) { }
  
  brand = "";

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.brand = params['brand'];
    })
  }

}
