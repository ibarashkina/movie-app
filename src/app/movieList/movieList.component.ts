import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { Api } from '../services/api.service';

interface Movies {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  favorite: boolean;
}

interface ApiData {
//   // page: number;
  results: Movies[];
//   // total_results: number;
//   // total_pages: number;
}

@Component({
  selector: 'movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css'],
})
export class movieListComponent implements OnInit {
  list: Movies[];
  movie: any;
  errorMessage:string;
  movieId: number;
  

  constructor(private api: Api) { }
  
  ngOnInit() {
    this.api.movieList.subscribe(list => this.list = list);  

      this.api.getMovie().subscribe((data:ApiData) => {
        this.movie = data; 
        this.api.updateMovieList(data.results);
      });
    
  }

  // getId = item => {
  //   const index = this.list.indexOf(item);
  //   this.movieId = this.list[index].id;
  //   console.log(this.movieId);
  //   this.clicked.emit(this.movieId);

  // }
 
}
