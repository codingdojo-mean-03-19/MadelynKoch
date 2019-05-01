import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  newTask: any;
  updateTask: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title: "", description: ""};
    this.updateTask = {title: "", description: ""};
  }

  tasks = [];
  task = {};
  showTask = false;
  showUpdate = false;

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
      this.task = data['task'];
    })
  }

  deleteTask(id: String) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Successfully deleted");
      this.getTasksFromService();
    })
  }

  onButtonClick(): void {
    this.getTasksFromService();
  }

  onButtonClickParam(task: object) {
    this.showTask = true;
    this.task = task;
  }

  onButtonClickDelete(id: String) {
    this.deleteTask(id);
  }

  onButtonClickUpdate(task: any) {
    this.updateTask = task;
    this.showUpdate = true;
  }

  onSubmit() {
    let observable = this._httpService.newTask(this.newTask);
    observable.subscribe(data => {
      console.log("Success");
      this.getTasksFromService();
    })
    this.newTask = {title: "", description: ""}
  }

  onSubmitUpdateTask(id: String) {
    console.log("THIS IS THE ID ", id);
    let observable = this._httpService.updateTask(id, this.updateTask);
    observable.subscribe(data => {
      this.getTasksFromService();
      this.showUpdate = false;
    })
  }

}

