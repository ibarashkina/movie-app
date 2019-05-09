import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Api {
  api_key = 'API_Key';
  moviestr: string;
  id: number;
  
  apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';

  searchApi ='https://api.themoviedb.org/3/search/${moviestr}?include_adult=false&page=1&language=en-US&api_key=ccf98653c165e83729605d20546c01d7';
  

  constructor(private http: HttpClient) {}


searchMovie = (moviestr) => {
  
  const searchApi = `https://api.themoviedb.org/3/search/${moviestr}?include_adult=false&page=1&language=en-US&api_key=ccf98653c165e83729605d20546c01d7`;
   return this.http.get(searchApi); 

};

// this.movie_string = moviestr;
  // const searchUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ccf98653c165e83729605d20546c01d7&language=en-US`;
  // return this.http.get(searchUrl);

getMovie = () => this.http.get(this.apiUrl);
}

// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';

// @Injectable()
// export class Api {
//     apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';
//     constructor(private http: HttpClient) {}

// getMovie = () => this.http.get(this.apiUrl);
// getMovieDetail = (movieId) => { 
//     const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ccf98653c165e83729605d20546c01d7&language=en-US`
//     return this.http.get(detailUrl); 
// }
// }