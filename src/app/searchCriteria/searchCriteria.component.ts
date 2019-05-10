import { Component, Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Api } from '../services/api.service';

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
  
  constructor(private api: Api){}

  
}
