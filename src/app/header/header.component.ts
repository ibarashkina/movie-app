import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Api]
})
export class HeaderComponent implements OnInit {
  main: boolean = true;
  movie: any;

constructor(private router: ActivatedRoute, private api: Api, ) { }

searchMovie = () => {
  this.movie.searchMovie();  
}

  ngOnInit() {
        this.api.getMovie().subscribe(data => {
        this.movie = data;
        // console.log(data);
      });        
}

  toggleSearchInput = () => {
    this.main = !this.main;
 };
}