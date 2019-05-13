import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface Movies {
  poster_path: string;
  adult: boolean;
  overview: string;
  genre_ids: number[];
  id: number;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

interface ApiData {
  page: number;
  results: Movies[];
}

@Component({
  selector: 'search-criteria',
  templateUrl: './searchCriteria.component.html',
  styleUrls: ['./searchCriteria.component.css']
})
export class searchCriteriaComponent implements OnInit {
  // movieString: string;
  // search_result: any;
  movie: any;
  // genreFiltered: [];
  list: Movies[];

constructor(private api: Api, private route: ActivatedRoute){}
ngOnInit(){
  this.route.params.subscribe(params => {
    this.api.getGenreList(params.id).subscribe((data:ApiData) => {
      this.movie = data;
      this.api.updateMovieList(data.results);
    });
  }) 
  }
}

