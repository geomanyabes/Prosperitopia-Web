import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_URL;
  private apiKey: string = environment.API_KEY;

  constructor(private http: HttpClient) {}
  
  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    
    headers = this.setApiKeyHeader(headers);
    
    const options = { params, headers };
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    headers = this.setApiKeyHeader(headers);
    const options = { headers };
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    headers = this.setApiKeyHeader(headers);
    const options = { headers };
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, options);
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    headers = this.setApiKeyHeader(headers);
    const options = { headers };
    return this.http.delete<T>(`${this.baseUrl}/${url}`, options);
  }
  
  private setApiKeyHeader(headers?: HttpHeaders): HttpHeaders {
    headers = headers || new HttpHeaders();
    return headers.set('X-API-KEY', this.apiKey);
  }
}
