import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  pattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  userNotFound: boolean;
  loginObj = {email: "", password: ""}
  registerObj = {firstName: "", lastName: "", email: "", password: ""}

  onLoginUser(){
    console.log("logging in user");
    let observable = this._httpService.loginUser(this.loginObj);
    observable.subscribe(result => {
      if(result === true) {
        this._router.navigate(['/listings']);
      }
      else {
        this.userNotFound = true;
      }
    })
  }

  onRegisterUser(){
    console.log("entered register function")
    let observable = this._httpService.registerUser(this.registerObj);
    observable.subscribe(data => {
      if(data['error']) {
        console.log(data['error']);
      } else {
        console.log("user registered and logged in");
        this._router.navigate(['/listings']);
      }
    })
  }

}
