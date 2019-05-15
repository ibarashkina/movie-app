import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

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
    favorite: boolean;
  }

interface ApiData {
    page: number;
    results: Movies[];
    total_results: number;
    total_pages: number;
    showArrow: boolean;
  }

  interface GenreData {
    genres: Genres[];
  }
  
  interface Genres {
    id: number;
    number: string;
  }

@Component({
  selector: 'genre-list',
  templateUrl: './genreList.component.html',
//   styleUrls: ['./genreList.component.css']
})
export class genreListComponent implements OnInit {
    list: Movies[];
    movie: any;
    errorMessage:string;
    movieId: number;
    red:boolean=true;
    favorite:boolean;
  
    main: boolean = false;
    movieString: string;
  
    mainfilter: boolean = false;
    genreList: Genres[];
    genreId: number = 0;
  
    constructor(private api: Api, private route: ActivatedRoute) { }
  
    addWatchList= (movie) => {
      movie.favorite=!movie.favorite;
     //  const list.movies =[]
      this.api.updateMovieList(this.list);
    }
    
    // navigateTo(value) {
    //     if (value) {
    //         this.router.navigate([value]);
    //     }
    //     return false;
    // }
    ngOnInit() {
        this.api.movieList.subscribe(list => this.list = list);  
        // this.api.getGenreList(this.genreId).subscribe((data: {results: []}) => this.api.updateMovieList(data.results));
        // console.log(this.genreId);

        
          this.route.params.subscribe(params => {
            this.api.getGenreList(this.genreId).subscribe((data:ApiData) => {
              this.movie = data;
              if (data.page === 1) {
                data.showArrow = false; 
                } else {
                  data.showArrow = true;
                }
              this.api.updateMovieList(data.results);
            });
          }),
    
          error => {
            this.errorMessage = error.message;
        }   
      }
  }
  