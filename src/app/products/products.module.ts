import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './list/products.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UpdateComponent,
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class ProductsModule { }
