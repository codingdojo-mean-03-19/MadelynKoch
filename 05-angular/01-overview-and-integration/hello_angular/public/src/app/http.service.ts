import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	getTasks(){

	    let tempObservable = this._http.get('/tasks');

	    tempObservable.subscribe(data => console.log("Got our tasks!", data));
	}

	getTaskById(){
		let tempObservable = this._http.get('/tasks/5cba54b5544f3277f1da3310');

		tempObservable.subscribe(data => console.log("Got the task!", data));
	}
	constructor(private _http: HttpClient) {
	  	this.getTasks();
	  	this.getTaskById();
	}
}