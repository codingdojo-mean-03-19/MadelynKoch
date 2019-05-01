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

	newTask(data) {
		return this._http.post('/tasks', data); 
	}

	deleteTask(id: String) {
		return this._http.delete('/tasks/' + id);
	}

	updateTask(id: String, data) {
		return this._http.put('/tasks/' + id, data);
	}
}