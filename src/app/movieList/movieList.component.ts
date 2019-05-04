import { Component } from '@angular/core';
import { Api } from '../services/api.service';

interface Movie {
  genre: string; 
  url: string;
}

interface ApiData {
  results: Movie[];
  count: number;
  next: string;
  previous: string;
}

@Component({
  selector: 'movie-list',
  templateUrl: './movieList.component.html',
//   styleUrls: ['./movieList.component.css']
  providers: [Api]
})
export class movieListComponent {
  title = 'movie-app';
  list: object[];
  errorMessage:string;
  constructor(private api: Api) {}

  getAllMovie = () => {
    this.api.getMovie().subscribe((data:ApiData) => {
    this.list = data.results;
    // this.errorMessage = null;
    },
    // error => console.log(error.message)
    error =>{this.errorMessage = error.message;
    }
    );
};
}
