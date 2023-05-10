import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { products } from 'src/app/store/reducers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  show$?: Observable<any>;

  constructor(
    private store: Store<{ counter: products }>
  ) {
    this.show$ = store.select('counter')
  }

  ngOnInit(): void {
  }

}
