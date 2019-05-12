import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';
    constructor(private http: HttpClient) {}
private _movieList = new BehaviorSubject<any[]>([]);
movieList = this._movieList.asObservable();

updateMovieList = newList => this._movieList.next(newList);
getMovie = () => this.http.get(this.apiUrl);
// getMovieDetail = (movieId) => { 
//     const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ccf98653c165e83729605d20546c01d7&language=en-US`
//     return this.http.get(detailUrl); 
// }
}
