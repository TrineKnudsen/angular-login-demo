import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductsService,

  ) { }

  ngOnInit(): void {
  }


  update(): void {
    if(this.product){
      this.productService.update(this.product)
        .subscribe(()=> this.clearSelection())
    }
  }

  clearSelection(): void {
    //skal fjerne detaljerne igen måske??
    this.location.back();
  }
}
