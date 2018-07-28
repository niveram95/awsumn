import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../../config/app.config';

import { Item } from './item.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  private headers: HttpHeaders;
  private heroesUrl: string;
  private translations: any;
  private test = 0;
  private latitude = 0;
  private longitude = 0;
  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient) {
    this.heroesUrl = AppConfig.endpoints.heroes;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get("./materials.json")
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  // @TODO: getItemByID
  getItemById(itemId: string): Observable<Item> {
    return this.http.get(this.heroesUrl + '/' + itemId)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }
}
