import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {

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
