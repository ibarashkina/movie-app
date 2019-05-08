import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { movieListComponent } from './movieList/movieList.component';

const routes: Routes = [
  { path: 'movie/:id', component: movieListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
