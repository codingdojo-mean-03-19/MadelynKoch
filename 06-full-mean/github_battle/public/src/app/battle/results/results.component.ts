import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() players: any;

  constructor() { }

  ngOnInit() {
    this.compareScores();
  }

  winner: {};
  loser: {};

  compareScores(){
    if(this.players[0].score > this.players[1].score){
      this.winner = this.players[0];
      this.loser = this.players[1];
    } else {
      this.winner = this.players[1];
      this.loser = this.players[0];
    }
  }  
}
