import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  authors = [];

  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got the authors", data);
      this.authors = data['authors'];
    })
  }
}
