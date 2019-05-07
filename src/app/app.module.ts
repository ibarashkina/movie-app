import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movieList/movieList.component';
import { SearchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { WatchListPageComponent } from './watchListPage/watchListPage.component';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Logger } from './services/logger.service';

const appRoutes: Routes = [
  {path: '', component: MovieListComponent },
  {path: 'search-criteria', component: SearchCriteriaComponent},
  {path: 'watch-list-page', component: WatchListPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchCriteriaComponent,
    WatchListPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
