import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getAuthors() {
    return this._http.get('/authors');
  }

  getAuthor(id) {
    return this._http.get('/authors/' + id);
  }

  newQuote(data, id) {
    return this._http.put('/authors/' + id + '/new', data);
  }

  updateRating(data, id) {
    return this._http.put('/authors/' + id + '/update', data);
  }

  updateAuthor(data, id) {
    return this._http.put('/authors/' + id, data);
  }

  deleteQuote(data, id) {
    return this._http.request('DELETE', '/authors/' + id + '/quote', {body: data});
  }

  newAuthor(data) {
    return this._http.post('/authors', data);
  }
}