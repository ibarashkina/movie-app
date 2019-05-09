import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';

import { Api } from '../services/api.service';

interface Movies {
//   poster_path: string;
//   adult: boolean;
//   overview: string;
//   release_date: string;
//   genre_ids: number[];
//   id: number;
//   original_title: string;
//   title: string;
//   backdrop_path: string;
//   popularity: number;
//   vote_count: number;
//   video: boolean;
//   vote_average: number;
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
  providers: [Api]
})
export class movieListComponent implements OnInit {
  list: Movies[];
  movie: any;
  errorMessage:string;

  constructor(private api: Api) { }
  
  ngOnInit() {
 
    // this.api.getMovie().subscribe(data => {
      this.api.getMovie().subscribe((data:ApiData) => {
        this.movie = data; 
        this.list = data.results;
        // console.log(data);
      });
  } 
}
