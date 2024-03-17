import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://api.example.com/items';

  constructor(private http: HttpClient) { }

  getAllItems(searchFilter: any, pageFilter: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params: { searchFilter, pageFilter } });
  }
}
