import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	getTasks(){
			return this._http.get('/tasks');
	}

	getTaskById(){
		return this._http.get('/tasks/5cba54b5544f3277f1da3310');
	}
	constructor(private _http: HttpClient) {
	  	
	}
}