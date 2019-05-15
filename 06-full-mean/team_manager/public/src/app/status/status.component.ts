import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPlayersFromService();
  }

  players = [];
  gameNum = '1';

  getPlayersFromService(){
    let observable = this._httpService.getPlayers();
    observable.subscribe(data => {
      this.players = data['players'];
    })
  }

  changeGame(gameNum){
    this.gameNum = gameNum;
  }

  onChangeStatus(player, status) {
    var statusObj = player.status;
    console.log(statusObj);
    console.log(status);
    statusObj[this.gameNum] = status;

    let observable = this._httpService.updatePlayer(player._id, {status: statusObj});
    observable.subscribe(data => {
      this.getPlayersFromService();
    })
  }
}
