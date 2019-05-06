import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  id = ""
  name = ""

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
      if(this.id !== 'new') {
        this.getAuthorFromService(this.id);
      } else {
        this.name = ""
        console.log("name is an empty string");
      }
    })
  }

  getAuthorFromService(id: String) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      console.log("got the author!", data);
      this.name = data['author'].name;
    })
  }

  onSubmit(id) {
    console.log(this.name)
    if(id === 'new') {
      let observable = this._httpService.createAuthor({name: this.name});
      observable.subscribe(data => {
        console.log("made a new author", data);
      })
    } else {
      let observable = this._httpService.updateAuthor({name: this.name}, id) 
      observable.subscribe(data => {
        console.log("updated author", data);
      })
    }
    this._router.navigate(['/home']);
  }

}
