import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPlayersFromService();
  }

  players = [];

  getPlayersFromService(){
    let observable = this._httpService.getPlayers();
    observable.subscribe(data => {
      console.log(data['players']);
      this.players = data['players'];
    })
  }

  onDeletePlayer(id){
    let observable = this._httpService.deletePlayer(id);
    observable.subscribe(data => {
      if(data['error']) {
        console.log(data['error']);
      } else {
        console.log("successfully deleted player");
        this.getPlayersFromService();
      }
    })
  }

}
