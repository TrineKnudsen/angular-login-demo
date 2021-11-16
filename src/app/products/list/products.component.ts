import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {Observable, Subscription} from "rxjs";
import {ProductList} from "../shared/product-list.model";
import {Product} from "../shared/product.model";
import {delay, take} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedProduct?: Product;
  products: Product[] | undefined;
  products$: Observable<ProductList> | undefined;

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  delete(product: Product) {
    this._productsService.deleteProduct(product.id).subscribe();
    this.ngOnInit();
  }

  add(name: string) {
    name = name.trim();
    if (!name) {return;}
    this._productsService.addProduct({name} as Product).subscribe();
    this.ngOnInit();
  }
}
