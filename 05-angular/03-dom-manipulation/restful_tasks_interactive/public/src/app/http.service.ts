import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	getTasks(){
			return this._http.get('/tasks');
	}

	getTaskById(id: String){
		return this._http.get('/tasks/' + id);
	}
	constructor(private _http: HttpClient) {
	  	
	}
}