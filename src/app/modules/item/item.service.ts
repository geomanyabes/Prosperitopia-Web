// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Item } from './interface/item.interface'; // Adjust the path as needed
import { CreUpdateItem } from './interface/creupdateitem.interface'; // Adjust the path as needed
import { SearchFilter } from '../../shared/interface/search-filter.interface';
import { PageFilter } from '../../shared/interface/page-filter.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl: string = environment.BASE_URL + '/items';
  constructor(private http: HttpClient) { }
  
  getAllItems(searchFilter: SearchFilter, pageFilter: PageFilter): Observable<Item[]> {
    // Construct query string with search and page filters
    let queryString = `?pageSize=${pageFilter.pageSize}&page=${pageFilter.page}&sortProperty=${pageFilter.sortProperty}&sortDirection=${pageFilter.sortDirection}`;

    // Add search filter if provided
    if (searchFilter.search) {
      queryString += `&search=${searchFilter.search}&searchType=${searchFilter.searchType}`;
    }

    // Make HTTP GET request with constructed query string
    return this.http.get<Item[]>(`${this.baseUrl}${queryString}`);
  }
  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  createItem(itemDto: CreUpdateItem): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, itemDto);
  }

  updateItem(id: number, itemDto: CreUpdateItem): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, itemDto);
  }
}
