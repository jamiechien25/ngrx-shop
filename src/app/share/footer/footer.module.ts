import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    NzIconModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
