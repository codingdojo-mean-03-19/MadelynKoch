import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id = "";
  author = {};
  quote = "";
  error = "";

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.getAuthorFromService(this.id);
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.author = data['author'];
    })
  }

  onSubmitQuote() {
    console.log("on submit quote");
    let observable = this._httpService.newQuote({quote: this.quote}, this.id);
    observable.subscribe(data => {
      if(data['error']) {
        this.error = data['error'];
        console.log(this.error);
      } else {
        this._router.navigate(['/quotes/', this.id]);
      }
    })
  }

}
