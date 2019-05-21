import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string;

  constructor( private _http: HttpClient) { 
    const token = localStorage.getItem('token');
    if(token) {
      this.token = token;
      console.log('got the token', this.token);
    }
    
  }

  getUsers() {
    return this._http.get('/api/users', {params: {token: this.token}});
  }

  getUser(id) {
    return this._http.get('/api/users', {params: {token: this.token}});
  }

  getListings() {
    return this._http.get('/api/listings', {params: {token: this.token}});
  }

  updateListing(id, data) {
    return this._http.put('/api/listings/' + id, data, {params: {token: this.token}});
  }

  getListing(id) {
    return this._http.get('/api/listings/show/' + id, {params: {token: this.token}});
  }

  deleteListing(id) {
    return this._http.delete('/api/listings/' + id, {params: {token: this.token}});
  }

  addListing(data) {
    return this._http.post('/api/listings', data, {params: {token: this.token}});
  }

  logoutUser(){
    return this._http.delete('/logout');
  }

  registerUser(data){
    return this._http.post('/register', data);
  }

  loginUser(data){

    return new Observable((observe) => {
      console.log("HIII");
      let login = this._http.post('/login', data);
      login.subscribe((data: any) => {
        if( data.token ) {
          this.token = data.token;
          localStorage.setItem("token", data.token);
          observe.next(true);
        } else if( data.error ) {
          observe.next(data.error);
        }
        observe.complete();
      })
    })
  }

}
