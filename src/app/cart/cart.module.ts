import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FooterModule } from '../share/footer/footer.module';
import { HeaderModule } from '../share/header/header.module';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    NzListModule,
    NzSelectModule,
    NzButtonModule,
    HeaderModule,
    FooterModule,
    NzCardModule,
    NzTableModule
  ]
})
export class CartModule { }
