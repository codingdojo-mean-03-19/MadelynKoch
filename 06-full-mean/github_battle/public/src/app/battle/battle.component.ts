import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  players: [false | any, false | any] = [false, false];
  error = "";
  showResults = false;

  newPlayer(event) {
    this.getPlayerFromService(event['name'], event['player']);
  }

  getPlayerFromAPI(name, playerId) {
    let observable = this._httpService.getUser(name);
    observable.subscribe(data => {
      if(data["message"] === "Not Found") {
        this.error = "User not found";
        console.log("error", this.error);
      } else {
        var score = (data["public_repos"] + data["followers"]) * 12;
        const player = {name: name, score: score, pic: data['avatar_url']};
        this.players[playerId] = player;
        this.addPlayerToDb(player);
      }
    })
  }

  getPlayerFromService(name, playerId){
    let observable = this._httpService.getPlayer(name);
    observable.subscribe(data => {
      console.log("hiii", data);
      if(data['error']) {
        console.log(data['error']);
        this.getPlayerFromAPI(name, playerId);
      } else {
        this.players[playerId] = data['player'];
      }
    })
  }

  addPlayerToDb(player){
    let observable = this._httpService.addPlayer(player);
    observable.subscribe(data => {
      if(data['error']) {
        console.log(data['error']);
      } else {
        console.log("succes", data['player']);
      }
    })
  }

  beginBattle() {
    this.showResults = true;
    this._router.navigate(['/battle/results']);
  }

}
