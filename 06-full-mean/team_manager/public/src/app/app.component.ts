import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor( private _httpService: HttpService){}

  btns = document.getElementsByClassName("btn");

  onButtonClick(e){

    var target = (e.target) ? e.target : e.srcElement;

    for(var i = 0; i < this.btns.length; i++){
      this.btns[i].className = this.btns[i].className.replace(" active", "");
    }

    target.className += " active";
  }
  
}
