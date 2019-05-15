import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  btns = document.getElementsByClassName("btn");
  
  onButtonClick(e){
  
    var target = (e.target) ? e.target : e.srcElement;

    for(var i = 0; i < this.btns.length; i++){
      this.btns[i].className = this.btns[i].className.replace(" active", "");
    }
    target.className += " active";
  }

}
