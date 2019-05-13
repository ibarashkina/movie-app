import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';
    constructor(private http: HttpClient) {}

    private _movieList = new BehaviorSubject<[]>([]);
    movieList = this._movieList.asObservable();

updateMovieList = newList => this._movieList.next(newList);
getMovie = () => this.http.get(this.apiUrl);

getMoviePage = (page:number) => {
    const pageUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    return this.http.get(pageUrl); 
};


getMovieDetail = (movieId:number) => { 
    const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ccf98653c165e83729605d20546c01d7&language=en-US`
    return this.http.get(detailUrl); 
}


searchMovie = (moviestr) => {
    if (!moviestr) {
        return this.getMovie();
    }
    const searchApi = `https://api.themoviedb.org/3/search/movie?query=${moviestr}&include_adult=false&page=1&language=en-US&api_key=ccf98653c165e83729605d20546c01d7`;
     return this.http.get(searchApi); 
  
  }

  getTopRatedMovies() {
    const topRatedApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=ccf98653c165e83729605d20546c01d7&language=en-US&page=1`;
    return this.http.get(topRatedApi);
  }

  getPopularMovies() {
    const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=8fb23e44721a9aefaabe1b6bb942bf15&language=en-US&page=1`;  
    return this.http.get(popularApi);
  }

  getNowPlayingMovies() {
    const nowPlayingApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=ccf98653c165e83729605d20546c01d7&language=en-US&page=1`;  
    return this.http.get(nowPlayingApi);
  }

  getGenreMovies() {
    const genreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=ccf98653c165e83729605d20546c01d7&language=en-US`;
    return this.http.get(genreApi);
  }

}

