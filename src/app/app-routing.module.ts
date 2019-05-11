import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { movieListComponent } from './movieList/movieList.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';

const routes: Routes = [
  { path: '', component: movieListComponent },
  { path: 'movie/:id', component: movieListComponent },  
  { path: 'search-criteria', component: searchCriteriaComponent },
  { path: 'watch-list-page', component: watchListPageComponent },
  { path: 'movie-detail', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
