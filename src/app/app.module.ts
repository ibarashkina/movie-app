import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { movieListComponent } from './movieList/movieList.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Logger } from './services/logger.service';

const appRoutes: Routes = [
  {path: '', component: movieListComponent },
  {path: 'search-criteria', component: searchCriteriaComponent},
  {path: 'watch-list-page', component: watchListPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    movieListComponent,
    searchCriteriaComponent,
    watchListPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ Logger ],
  bootstrap: [AppComponent]
})
export class AppModule { }
