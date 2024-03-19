import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchType, SearchTypeEnumMapping } from '../../enum/searchtype.enum';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent {
  public SearchTypeEnumMapping = SearchTypeEnumMapping;
  public searchTypes = Object.values(SearchType);//.filter(value => isNaN(Number(value)) === false);
  
  searchText: string = '';
  searchType: string = 'EXACT';

  @Input() hasSearchButton: boolean = true;
  @Input() emptyText: string = 'Search';
  @Input() searchFieldLabel?: string;
  @Input() searchFieldWidth?: number;
  @Input() searchTypeFieldLabel?: string;
  @Input() searchTypeFieldWidth?: number;
  @Input() buttonText: string = 'Search';
  @Input() buttonWidth?: number;

  @Output() search: EventEmitter<{ searchText: string, searchType: string }> = new EventEmitter();

  onSearch(): void {
    this.search.emit({ searchText: this.searchText, searchType: this.searchType });
  }
}
