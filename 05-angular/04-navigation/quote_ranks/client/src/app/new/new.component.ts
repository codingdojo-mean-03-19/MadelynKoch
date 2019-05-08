import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id = "";
  author = {};
  name = "";
  error = "";

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })

    if(this.id !== ''){
      this.getAuthorFromService(this.id);
    }
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.author = data['author'];
      this.name = data['author'].name;
    })
  }

  onSubmitAuthor() {
    if(this.id === '') {
      let observable = this._httpService.newAuthor({name: this.name});
      observable.subscribe(data => {
        if(data['error']) {
          console.log(data['error']);
          this.error = "Name is required and must be at least 2 characters";
        } else {
          console.log("successfully added author");
          this._router.navigate(['']);
        }  
      })
    } else {
      let observable = this._httpService.updateAuthor({name: this.name}, this.id);
      observable.subscribe(data => {
        if(data['error']) {
          console.log(data['error']);
          this.error = "Name is required and must be at least 2 characters";
        } else {
          console.log("successfully added author");
          this._router.navigate(['']);
        } 
      })
    }
  }
}
