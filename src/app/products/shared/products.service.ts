import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductList} from "./product-list.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<ProductList> {
    return this._http
      .get<ProductList>('https://localhost:5001/api/products')
  }
}
