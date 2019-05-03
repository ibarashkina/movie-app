import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { movieListComponent } from './movieList/movieList.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    movieListComponent,
    searchCriteriaComponent,
    watchListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
