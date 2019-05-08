import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Api {
    apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';
    constructor(private http: HttpClient) {}

getMovie = () => this.http.get(this.apiUrl);
}