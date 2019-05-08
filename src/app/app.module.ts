import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { movieListComponent } from './movieList/movieList.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchListPageComponent } from './watchListPage/watchListPage.component';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  {path: '', component: movieListComponent },
  {path: 'searchCriteria', component: searchCriteriaComponent},
  {path: 'watchListPage', component: watchListPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    movieListComponent,
    searchCriteriaComponent,
    watchListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
