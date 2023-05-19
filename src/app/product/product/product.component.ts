
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { product } from 'src/app/interface/product';
import { loadTodos, loadTodosSuccess, productActionCart, productActionadd, productActiondown } from 'src/app/store/actions';
import { products } from 'src/app/store/reducers';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productInfo: product[] = []


  constructor(
    private store: Store<{ counter: products }>,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());


    this.store.subscribe((data) => {
      console.log('storeData', data)
      this.productInfo = data.counter.products
    })
  }


  incrementNum(item: product) {
    this.store.dispatch(productActionadd({ item }))
  }


  decrementNum(item: product) {
    this.store.dispatch(productActiondown({ item }))
  }


  add(item: product) {
    this.store.dispatch(productActionCart({ item }))
  }


  test() {
    this.store.dispatch(loadTodos())
  }

  listOfOption = [
    {
      couponId: '1',
      couponDesc: '30元折價券',
      discount: 1,          // 折數 ex: 0.9 0.8
      priceOff: 30          // 單一品項折價 ex: 10,20,30
    },
    {
      couponId: '2',
      couponDesc: '100元折價券',
      discount: 1,          // 折數 ex: 0.9 0.8
      priceOff: 100         // 單一品項折價 ex: 10,20,30
    },
    {
      couponId: '3',
      couponDesc: '九折券',
      discount: 0.9,        // 折數 ex: 0.9 0.8
      priceOff: 0           // 單一品項折價 ex: 10,20,30
    }
  ];
  listOfSelectedValue: any[] = [];

  isNotSelected(value: any): boolean {
    return this.listOfSelectedValue.indexOf(value.couponId) === -1;
  }



}
