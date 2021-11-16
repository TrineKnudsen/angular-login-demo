import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

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

  ) { }

  ngOnInit(): void {
  }

  ClearSelection(): void {
    //skal fjerne detaljerne igen måske??
    this.location.back();
  }
}
