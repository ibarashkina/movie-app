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

@Component({
  selector: 'top-rated-list',
  templateUrl: './topRatedList.component.html',
  styleUrls: ['./topRatedList.component.css']
})
export class topRatedListComponent implements OnInit {
    list: Movies[];
    movie: any;
    errorMessage:string;
    movieId: number;
    red:boolean=true;
    favorite:boolean;
  
    main: boolean = false;
    // movie: any;
    movieString: string;
  
    mainfilter: boolean = false;
    search_result: [];
  
    constructor(private api: Api, private route: ActivatedRoute) { }
  
    addWatchList= (movie) => {
      movie.favorite=!movie.favorite;
     //  const list.movies =[]
      this.api.updateMovieList(this.list);
    }

    scrollUp = () => {
      window.scroll(0,0);
    }
    
    ngOnInit() {
        this.api.movieList.subscribe(list => this.list = list);  
    
          this.route.params.subscribe(params => {
            this.api.getTopRatedMovies(params.page).subscribe((data:ApiData) => {
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
  