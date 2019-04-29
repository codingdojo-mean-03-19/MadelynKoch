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

  ngOnInit(){}

  tasks = [];
  task = {};
  showTask = false;

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['tasks'];
      console.log(data['tasks']);
    })
  }

  getTaskFromServiceById(id: String) {
    let tempObservable = this._httpService.getTaskById(id);
		tempObservable.subscribe(data => {
      console.log("Got the task!", data);
      console.log(this.showTask);
      this.task = data['task'];
    })
  }

  onButtonClick(): void {
    this.getTasksFromService();
  }

  onButtonClickParam(id: String) {
    this.showTask = true;
    this.getTaskFromServiceById(id);
  }

}

