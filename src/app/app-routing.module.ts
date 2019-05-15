import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { movieListComponent } from './movieList/movieList.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
import { topRatedListComponent } from './topRatedList/topRatedList.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';
import { nowPlayingComponent } from './nowPlayingList/nowPlayingList.component';
import { popularListComponent } from './popularList/popularList.component';

const routes: Routes = [
  { path: '', component: movieListComponent },
  { path: 'movie/:id', component: movieListComponent },  
  { path: 'watch-list-page', component: watchListPageComponent },
  { path: 'movie-detail', component: MovieDetailComponent },
  { path: 'now-playing-list', component: nowPlayingComponent},
  { path: 'popular-list', component: popularListComponent},
  { path: 'top-rated-list', component: topRatedListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
