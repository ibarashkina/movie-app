import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Api {
apiUrl = 'https://www.themoviedb.org/documentation/api';
constructor(private http: HttpClient) {}

getMovie = () => this.http.get(this.apiUrl);
}