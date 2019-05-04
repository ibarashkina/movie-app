import { Component } from '@angular/core';
import { Logger } from '../services/logger.service';

@Component({
  selector: 'watch-list-page',
  templateUrl: './watchListPage.component.html',
//   styleUrls: ['./watchListPage.component.css']
  providers: [Logger]
})
export class watchListPageComponent {
  title = 'movie-app';
  constructor(private logger: Logger) {
  }
}