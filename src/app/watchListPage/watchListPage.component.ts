import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'watch-list-page',
  templateUrl: './watchListPage.component.html',
  styleUrls: ['./watchListPage.component.css']
})
export class watchListPageComponent implements OnInit {
  title = 'movie-app';
  list:[];
  constructor(private api: Api) {}
  ngOnInit() {

    this.api.movieList.subscribe(list => this.list = list);  
  }
}