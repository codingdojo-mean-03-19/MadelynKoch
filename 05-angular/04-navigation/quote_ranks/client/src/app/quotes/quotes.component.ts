import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id = "";
  author = {}
  quotes = [];

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })

    this.getQuotesFromService(this.id);
  }

  getQuotesFromService(id){
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      console.log("Got the author");
      this.author = data['author'];
      this.quotes = data['author'].quotes;
    })
  }

  voteUp(quote) {
    var rating = quote.rating;
    rating++;
    let observable = this._httpService.updateRating({quote: quote.quote, rating: rating}, this.id);
    observable.subscribe(data => {
      console.log("voted up", data);
    })
    this.getQuotesFromService(this.id);
  }

  voteDown(quote) {
    var rating = quote.rating;
    rating--;
    let observable = this._httpService.updateRating({quote: quote.quote, rating: rating}, this.id);
    observable.subscribe(data => {
      console.log("voted down", data);
    })
    this.getQuotesFromService(this.id);
  }

  deleteQuoteFromDb(quote, id){
    let observable = this._httpService.deleteQuote({quote: quote.quote}, this.id);
    observable.subscribe(data => {
      console.log(data);
    })
    this.getQuotesFromService(this.id);
  }
}
