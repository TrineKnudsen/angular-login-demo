import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ProductList} from "./product-list.model";
import {environment} from "../../../environments/environment";
import {Product} from "./product.model";
import {catchError, tap} from "rxjs/operators";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsApi = environment.api + '/products';

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

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

  addProduct(product: Product): Observable<Product> {
    return this._http
      .post<Product>(this.productsApi, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsApi}/${id}`;

    return this._http
      .delete<Product>(url, this.httpOptions);
  }
}
