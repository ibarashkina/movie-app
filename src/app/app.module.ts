import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { movieListComponent } from './movieList/movieList.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
import { nowPlayingComponent } from './nowPlayingList/nowPlayingList.component';
import { popularListComponent } from './popularList/popularList.component';
import { topRatedListComponent } from './topRatedList/topRatedList.component';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';

// import { Logger } from './services/logger.service';
import { Api } from './services/api.service';


const appRoutes: Routes = [
  {path: 'home/:page', component: movieListComponent, pathMatch: 'full' },
  {path: 'watch-list-page', component: watchListPageComponent},
  {path: 'now-playing-list/:page', component: nowPlayingComponent},
  {path: 'popular-list/:page', component: popularListComponent},
  {path: 'top-rated-list/:page', component: topRatedListComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},  
  {path: '', redirectTo: 'home/1', pathMatch: 'full' },
  {path: '**', redirectTo: 'home/1'}
];
@NgModule({
  declarations: [
    AppComponent,
    movieListComponent,
    watchListPageComponent,
    MovieDetailComponent,
    HeaderComponent,
    nowPlayingComponent,
    popularListComponent, 
    topRatedListComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
