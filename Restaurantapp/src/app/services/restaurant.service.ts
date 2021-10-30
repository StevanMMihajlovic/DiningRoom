import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantList } from '../models/restaurant-list.model';
import { map } from 'rxjs/operators';
import { MenuList } from '../models/menu-list.model';

const baseURL = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(params?:any): Observable<RestaurantList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("filter",params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new RestaurantList(data);
    }))
  }

  getMenus(id :number): Observable<MenuList> {
    return this.http.get(`${baseURL}/${id}/menus`).pipe(map((data: any) => {
      return new MenuList(data);
    }))

  }

}
