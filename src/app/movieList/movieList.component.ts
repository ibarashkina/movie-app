import { Component } from '@angular/core';
import { Api } from '../services/api.service';
//I'm keeping these below for now because I'm pretty sure this is what we will be needing for the "movie details" portion. 
// interface Genres {
//   id: number;
//   name: string; 
// }

// interface ProductionCompanies {
//   name: string;
//   id: number;
//   logo_path: string;
//   origin_coutnry: string;
// }

// interface ProductionCountries {
//   iso_3166_1: string;
//   name: string;
// }

// interface SpokenLanguages {
//   iso_639_1: string;
//   name: string;
// }

// interface Movies {
//   adult: boolean;
//   backdrop_path: string;
//   belongs_to_collection: object;
//   budget: number;
//   genres: Genres[];
//   homepage: string;
//   id: number;
//   imdb_id: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   production_companies: ProductionCompanies[];
//   production_countries: ProductionCountries[];
//   release_date: string;
//   revenue: number;
//   runtime: number;
//   spoken_languages: SpokenLanguages[];
//   status: string;
//   tagline: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

// interface ApiData {
//   movies: Movies[];
// }

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
}

interface ApiData {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}

@Component({
  selector: 'movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css'],
  providers: [Api]
})

export class MovieListComponent {
  list:Movies[];
  errorMessage:string;
  imgUrl: string;
  constructor(private api: Api) {}

  getAllMovie = () => {
    this.api.getMovie().subscribe((data:ApiData) => {
    this.list = data.results;
    console.log(this.list);

    // this.errorMessage = null;
    },
    // error => console.log(error.message)
    error =>{this.errorMessage = error.message;
    }
    );

};

}
