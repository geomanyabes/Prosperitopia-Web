// search-toolbar.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent {
  searchText: string = '';
  searchType: string = 'EXACT';

  @Output() search: EventEmitter<{ searchText: string, searchType: string }> = new EventEmitter();

  onSearch(): void {
    // Emit the search event with the search text and search type
    this.search.emit({ searchText: this.searchText, searchType: this.searchType });
  }
}
