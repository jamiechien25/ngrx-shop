import { Component } from '@angular/core';
import { product } from 'src/app/interface/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkProsuctList: product[] = []
}
