import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit() {
  }

  name = "";
  position = "";

  addNewPlayer(){
    var objToAdd = {name: this.name};

    console.log(this.position);

    if(this.position !== ""){
      objToAdd['preferred_position'] = this.position;
    }

    console.log(objToAdd);

    let observable = this._httpService.addPlayer(objToAdd);
    observable.subscribe(data => {
      if(data['error']) {
        console.log(data['error']);
      } else {
        console.log("successfully added player", data['player']);
        this._router.navigate(['']);
      }
    })
  }

}
