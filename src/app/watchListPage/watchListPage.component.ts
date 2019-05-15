import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'watch-list-page',
  templateUrl: './watchlistPage.component.html',
  styleUrls: ['./watchlistPage.component.css']
})
export class watchlistPageComponent implements OnInit {
  title = 'movie-app';
  red:boolean;
  list:any[];
  original: any[];

  constructor(private api: Api) {}
  ngOnInit() {

    this.api.movieList.subscribe(list => { 
      this.original = list;
      this.list = list.filter(movie => movie.favorite);
    });  
  }

  removeTask= (movie) => {
    this.red=!this.red;
    movie.favorite=false;
   //  const list.movies =[]
    this.api.updateMovieList(this.original);
  }
}