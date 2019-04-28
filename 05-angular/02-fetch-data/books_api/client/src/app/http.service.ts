import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  getAuthors(){
    let authors = this._http.get('/authors');
    authors.subscribe(data => (console.log("Got the authors", data))); 
  }
  getAuthorById(){
    let author = this._http.get('/authors/5cc4ebf2638d3abd2e8dcfd0');
    author.subscribe(data => (console.log("Got the author", data)))
  }
  constructor(private _http: HttpClient) {
    this.getAuthors();
    this.getAuthorById();
  }
}

