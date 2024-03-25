// item.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './interface/item.interface'; // Adjust the path as needed
import { SearchFilter } from '../../shared/interface/search-filter.interface';
import { PageFilter } from '../../shared/interface/page-filter.interface';
import { HttpService } from '../../core/service/http/http-service.service';
import { PagedResult } from '../../shared/interface/paged-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private httpService: HttpService) { }
  
  getAllItems(searchFilter: SearchFilter, pageFilter: PageFilter): Observable<PagedResult<Item>> {
    // Construct query params
    const params: any = {
      pageSize: pageFilter.pageSize.toString(),
      page: pageFilter.page.toString(),
      sortProperty: pageFilter.sortProperty,
      sortDirection: pageFilter.sortDirection
    };

    // Add search filter if provided
    if (searchFilter.search) {
      params['search'] = searchFilter.search;
      params['searchType'] = searchFilter.searchType;
    }

    // Make HTTP GET request using generic get method from HttpService
    return this.httpService.get<PagedResult<Item>>('items', params);
  }

  getItemById(id: number): Observable<Item> {
    return this.httpService.get<Item>(`items/${id}`);
  }

  createItem(itemDto: Item): Observable<Item> {
    return this.httpService.post<Item>('items', itemDto);
  }

  updateItem(id: number, itemDto: Item): Observable<Item> {
    return this.httpService.put<Item>(`items/${id}`, itemDto);
  }
  deleteItem(id: number): Observable<Item> {
    return this.httpService.delete<Item>(`items/${id}`);
  }
}
