import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface GenreData {
  genres: Genres[];
}

interface Genres {
  id: number;
  number: string;
}


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
  genreList: Genres[];
  genreId: number;

constructor(private router: ActivatedRoute, private api: Api, ) { }

ngOnInit() {
        
      this.api.getGenreMovies().subscribe((data:GenreData) => {
        this.genreList = data.genres;
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

onChange = (event) => {
  this.genreId = event.target.value;
  // this.router.navigate([event.target.value]);
  console.log(this.genreId);
}



// getGenreMovies = () => {
//   this.api.getGenreMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }
}