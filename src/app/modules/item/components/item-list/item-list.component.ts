import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Item } from '../../interface/item.interface'; 
import { ItemService } from '../../item.service';
import { PageFilter } from '../../../../shared/interface/page-filter.interface';
import { SearchFilter } from '../../../../shared/interface/search-filter.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { PagedResult } from '../../../../shared/interface/paged-result.interface';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatMenu) appMenu!: MatMenu;
  
  // Define displayedColumns and dataSource properties
  displayedColumns: string[] = ['id', 'name', 'description', 'category', 'price', 'actions']; // Adjust this based on your columns
  
  pagedItems?: PagedResult<Item>;
  searchTerm: string = '';
  searchType: string = 'EXACT';
  page: number = 0;
  pageSize: number = 10;
  sortDirection: string = 'asc';
  sortProperty: string = 'id';

  dataSource: MatTableDataSource<Item>;

  constructor(private itemService: ItemService, private dialog: MatDialog) {
    // Initialize MatTableDataSource
    this.dataSource = new MatTableDataSource<Item>();
  }
  getPageFilters(): PageFilter {
    return  { 
      pageSize: this.pageSize,
      page: this.page,
      sortProperty: this.sortProperty,
      sortDirection: this.sortDirection
    };
  }
  getSearchFilters(): SearchFilter {
    return { search: this.searchTerm, searchType: this.searchType }
  }
  resetFilters() {
    this.searchTerm = '';
    this.searchType = 'EXACT';
    this.page = 0;
    this.pageSize = 10;
    this.sortDirection = 'asc';
    this.sortProperty = 'id';
    this.loadItems();
  }

  ngAfterViewInit(): void {
    this.loadItems();
  }
  onPageEvent(event?:PageEvent) {
    this.page = event?.pageIndex || 0;
    this.pageSize = event?.pageSize || 10;
    this.loadItems();
  }
  onNewItem() {
    this.openItemDetailsForm({
      id: 0,
      name: '',
      description: '',
      price: undefined,
      category: ''
    }, false);
  }
  viewItem(id: number): void {
    this.itemService.getItemById(id).subscribe(item => {
      // Open popup modal in readonly mode
      this.openItemDetailsForm(item, true);
    });
  }

  editItem(id: number): void {
    this.itemService.getItemById(id).subscribe(item => {
      // Open popup modal in write mode
      this.openItemDetailsForm(item, false);
    });
  }

  // confirmDelete(id: number): void {
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     width: '250px',
  //     data: 'Are you sure you want to delete this item?'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // User confirmed delete, call deleteItem
  //       this.itemService.deleteItem(id).subscribe(() => {
  //         // Handle delete success
  //       });
  //     }
  //   });
  // }


  openItemDetailsForm(data: Item, readonly: boolean): void {
    // Open the item details form in a dialog
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '400px', // Adjust the width as needed
      data: data
    });
    const formRef = dialogRef.componentInstance;
    formRef.title = `${data == null ? 'Create' : 'Update'} Item`;
    formRef.readonly = readonly;
    formRef.submitForm.subscribe(item => {
      this.loadItems();
    });
  }
  onSearch(evt: any): void {
    // Assign event data to search filter
    console.log(evt);
    this.searchTerm = evt.searchText;
    this.searchType = evt.searchType;

    // Reload items with updated search filter
    this.loadItems();
  }
  loadItems(): void {
    let searchFilter = this.getSearchFilters();
    let pageFilter = this.getPageFilters();
    this.itemService.getAllItems(searchFilter, pageFilter).subscribe(result => {
      this.pagedItems = result;
      this.dataSource.data = this.pagedItems.result;
    });
  }
}
