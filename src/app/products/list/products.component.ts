import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {Observable} from "rxjs";
import {ProductList} from "../shared/product-list.model";
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  $products: Observable<ProductList> | undefined;
  selectedProduct?: Product;
  products: Product[] = [];
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.$products = this._productsService.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  delete(product: Product) {
    this.products = this.products.filter(p => p !== product)
    this._productsService.deleteProduct(product.id).subscribe();
  }

  add(name: string) {
    name = name.trim();
    if (!name) {return;}
    this._productsService.addProduct({name} as Product).subscribe();
    this.ngOnInit();
  }
}
