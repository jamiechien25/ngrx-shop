import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { product } from 'src/app/interface/product';
import { CheckOutTotal, loadTodos } from 'src/app/store/actions';
import { products } from 'src/app/store/reducers';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkProsuctList: product[] = []
  total: number = 0



  constructor(
    private store: Store<{ counter: products }>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(CheckOutTotal());

    this.store.subscribe((data) => {
      console.log('storeData', data)
      this.checkProsuctList = data.counter.checkOut
      this.total = data.counter.Total
    })
  }


}
