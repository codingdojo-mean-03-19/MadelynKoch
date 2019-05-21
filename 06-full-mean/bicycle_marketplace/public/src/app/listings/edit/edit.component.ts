import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventEmitter } from 'protractor';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() listing: any;
  @Input() refresh: any;
  @Output() deleted = new EventEmitter();

  constructor( 
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onEditListing(id){
    let observable = this._httpService.updateListing(id, this.listing);
    observable.subscribe(data => {
      if(data['err']) {
        console.log(data['err']);
      } else {
        console.log("success!")
      }
    })
  }

  onDelete(id){
    let observable = this._httpService.deleteListing(id);
    observable.subscribe(data => {
      if(data['err']){
        console.log(data['err']);
      } else {
        console.log("deleted");
        console.log("HELLOOOO", typeof this.refresh);
        this.refresh();
      }
    })
  }

}
