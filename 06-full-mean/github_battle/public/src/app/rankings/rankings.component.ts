import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  constructor( private _httpService: HttpService ) { }

  ngOnInit() {
    this.getPlayersFromService();
  }

  players = [];

  getPlayersFromService(){
    let observable = this._httpService.getPlayers();
    observable.subscribe(data => {
      this.players = data['players'];
    })
  }

}
