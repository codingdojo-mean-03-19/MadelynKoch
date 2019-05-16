import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpService } from '../../http.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() playerNum: string;
  @Input() player: any;
  @Output() sendNameToBattle = new EventEmitter();

  constructor(
    private _httpService: HttpService
  ) { }

  name = "";

  ngOnInit() {
    console.log("this is the player:", this.player);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onGetUser(playerNum) {
    this.sendNameToBattle.emit({player: playerNum, name: this.name});
    this.name="";
  }

}
