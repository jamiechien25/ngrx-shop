import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeaderModule } from '../share/header/header.module';
import { FooterModule } from '../share/footer/footer.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzSelectModule,
    NzButtonModule,
    HeaderModule,
    FooterModule,
    NzCardModule,
  ]
})
export class ProductModule { }
