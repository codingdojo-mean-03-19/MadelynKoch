import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get('/products');
  }

  deleteProduct(id) {
    return this._http.delete('/products/' + id);
  }

  getProduct(id) {
    return this._http.get('/products/' + id);
  }

  newProduct(data) {
    return this._http.post('/products', data);
  }

  updateProduct(id, data) {
    return this._http.put('/products/' + id, data);
  }
}
