// item-list.component.ts

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../interface/item.interface'; 
import { ItemService } from '../../item.service';
import { PageFilter } from '../../../../shared/interface/page-filter.interface';
import { SearchFilter } from '../../../../shared/interface/search-filter.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ItemTableItem } from '../item-table/item-table-datasource';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ItemTableItem>;
  items: Item[] = [];
  searchFilter: SearchFilter;
  pageFilter: PageFilter;

  constructor(private itemService: ItemService) {
    this.searchFilter = { search: '', searchType: '' };
    this.pageFilter = { pageSize: 10, page: 0, sortProperty: 'id', sortDirection: 'asc' };
  }

  ngAfterViewInit(): void {
    this.loadItems();
  }

  onSearch(evt: any /*{searchText: string, searchType: string }*/): void {
    // Assign event data to search filter
    console.log(evt);
    this.searchFilter = {
      search: evt.searchText,
      searchType: evt.searchType
    };

    // Reload items with updated search filter
    this.loadItems();
  }

  previousPage(): void {
    this.pageFilter.page--;
    this.loadItems();
  }

  nextPage(): void {
    this.pageFilter.page++;
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems(this.searchFilter, this.pageFilter).subscribe(items => {
      this.items = items;
    });
  }
}
