import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from '../services/api.service';

interface Movies {
  backdrop_path: string;
  genres: {
    id: number;
    name: string
  }[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_count: number;
  vote_average: number;
}


interface ApiData {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}


@Component({
  selector: 'movie-detail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.css'],

})
export class MovieDetailComponent implements OnInit {
  list: Movies[];
  movie: any;

  constructor(private api: Api, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getMovieDetail(params.id).subscribe((data:ApiData) => {
        this.movie = data; 
      });
  })

    }


}