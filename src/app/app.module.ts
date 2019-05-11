import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { movieListComponent } from './movieList/movieList.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';
// import { Logger } from './services/logger.service';
import { Api } from './services/api.service';

const appRoutes: Routes = [
  {path: '', component: movieListComponent, pathMatch: 'full' },
  {path: 'search-criteria', component: searchCriteriaComponent},
  {path: 'watch-list-page', component: watchListPageComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    movieListComponent,
    searchCriteriaComponent,
    watchListPageComponent,
    MovieDetailComponent,
    HeaderComponent
    
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
