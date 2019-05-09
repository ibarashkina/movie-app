import { Component, Injectable } from '@angular/core';
import { Routes } from '@angular/router';
// import { Api } from '../services/api.service';
// import { HeaderComponent } from './header/header.component';
// import { movieListComponent } from './movieList/movieList.component';

// const routes: Routes = [
//   { path: '', component: movieListComponent },
//   { path: 'movie/:id', component: movieListComponent },
// ];

@Component({
  selector: 'search-criteria',
  templateUrl: './searchCriteria.component.html',
  // styleUrls: ['./movieList.component.css']
})
export class searchCriteriaComponent {
  title = 'movie-app';
  movieString: string;
  search_result: any;
  movie: any;


  searchMovie = (movieString) => {
    this.api.searchMovie(movieString).subscribe(data => {
      this.search_result = data['results'];
      console.log(this.search_result);
    });
  }
  
}
