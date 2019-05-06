import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors');
  }

  getAuthor(id) {
    return this._http.get('/authors/' + id);
  }

  updateAuthor(data, id: string) {
    return this._http.put('/authors/' + id, data);
  }

  createAuthor(data) {
    return this._http.post('/authors', data);
  }

  deleteAuthor(id: string) {
    return this._http.delete('/authors/' + id)
  }
}
