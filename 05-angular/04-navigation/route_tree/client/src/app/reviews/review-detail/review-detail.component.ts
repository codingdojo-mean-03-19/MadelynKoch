import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  id: Number;
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

}
