import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  main: boolean = true;
  movie: any;
  movieString: string;
  search_result: [];
constructor(private router: ActivatedRoute, private api: Api, ) { }

ngOnInit() {
        this.api.getMovie().subscribe(data => {
        this.movie = data;
        // console.log(data);
      });        
}

  toggleSearchInput = () => {
    this.main = !this.main;
 };

searchMovie = () => {
  this.api.searchMovie(this.movieString).subscribe((data: {results: []}) => {
    console.log(data.results);
    this.api.updateMovieList(data.results);
  });
}

getTopRatedMovies = () => {
  this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
    console.log(data.results);
    this.api.updateMovieList(data.results);
  });
}

getNowPlayingMovies = () => {
  this.api.getNowPlayingMovies().subscribe((data: {results: []}) => {
    console.log(data.results);
    this.api.updateMovieList(data.results);
  });
}

getPopularMovies = () => {
  this.api.getPopularMovies().subscribe((data: {results: []}) => {
    console.log(data.results);
    this.api.updateMovieList(data.results);
  });
}

getGenreMovies = () => {
  this.api.getGenreMovies().subscribe((data: {results: []}) => {
    console.log(data.results);
    this.api.updateMovieList(data.results);
  });
}

// getTopRatedMovies = () => {
//   this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

// getTopRatedMovies = () => {
//   this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

// getTopRatedMovies = () => {
//   this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

// getTopRatedMovies = () => {
//   this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }
}