import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../interface/item.interface'; 
import { ItemService } from '../../item.service';
import { PageFilter } from '../../../../shared/interface/page-filter.interface';
import { SearchFilter } from '../../../../shared/interface/search-filter.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  // Define displayedColumns and dataSource properties
  displayedColumns: string[] = ['id', 'name', 'description', 'category']; // Adjust this based on your columns
  
  items: Item[] = [];
  searchFilter: SearchFilter;
  pageFilter: PageFilter;
  dataSource: MatTableDataSource<Item>;

  constructor(private itemService: ItemService, private dialog: MatDialog) {
    this.searchFilter = { search: '', searchType: '' };
    this.pageFilter = { pageSize: 10, page: 0, sortProperty: 'id', sortDirection: 'asc' };
    
    // Initialize MatTableDataSource
    this.dataSource = new MatTableDataSource<Item>();
  }
  resetFilters() {
    this.searchFilter = { search: '', searchType: '' };
    this.pageFilter = { pageSize: 10, page: 0, sortProperty: 'id', sortDirection: 'asc' };
    
    // Initialize MatTableDataSource
    this.dataSource = new MatTableDataSource<Item>();
    this.loadItems();
  }

  ngAfterViewInit(): void {
    this.loadItems();
  }
  openItemDetailsForm(data?: Item): void {
    // Open the item details form in a dialog
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '340px', // Adjust the width as needed
      data: data
    });
    dialogRef.componentInstance.title = `${data == null ? 'Create' : 'Update'} Item`;
    // dialogRef
    // Subscribe to the afterClosed event to handle result or action after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Perform any action needed after the dialog is closed
    });
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
      // Update dataSource with new data
      this.dataSource.data = items;
    });
  }
}
