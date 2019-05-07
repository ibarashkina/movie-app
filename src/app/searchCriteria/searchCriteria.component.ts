import { Component } from '@angular/core';
import { Logger } from '../services/logger.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './searchCriteria.component.html',
  styleUrls: ['./searchCriteria.component.css'],
  providers: [Logger]
})
export class SearchCriteriaComponent {
  title = 'movie-app';

  constructor(private logger: Logger) {
  }
  
}
