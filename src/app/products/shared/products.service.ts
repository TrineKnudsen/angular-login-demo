import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ProductList} from "./product-list.model";
import {environment} from "../../../environments/environment";
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsApi = environment.api + '/products';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<ProductList> {
    return this._http
      .get<ProductList>( this.productsApi);
  }

  getProduct(id: number): Observable<Product> {
    return this._http
      .get<Product>(this.productsApi + '/' + id);
    //return of({id: 1, name: 'Bilbo'});
  }

  update(product: Product):Observable<Product> {
    return this._http
      .put<Product>(this.productsApi + '/' + product.id, product);
  }
}
