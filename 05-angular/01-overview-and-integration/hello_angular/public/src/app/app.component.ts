import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.getTaskFromServiceById();
  }

  tasks = [];
  task = {};

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['tasks'];
      console.log(data['tasks']);
    })
  }

  getTaskFromServiceById() {
    let tempObservable = this._httpService.getTaskById();
		tempObservable.subscribe(data => {
      console.log("Got the task!", data);
      this.task = data['task'];
    })
  }
}

