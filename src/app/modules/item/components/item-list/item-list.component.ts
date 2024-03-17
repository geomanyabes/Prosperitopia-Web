// item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    const searchFilter = { Search: '', SearchType: 'EXACT' }; // Adjust as needed
    const pageFilter = { PageSize: 10, Page: 1, SortProperty: 'Id', SortDirection: 'ASC' }; // Adjust as needed

    this.itemService.getAllItems(searchFilter, pageFilter)
      .subscribe(items => {
        this.items = items;
      });
  }
}
