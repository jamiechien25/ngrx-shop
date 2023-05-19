
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
    private httpClient : HttpClient
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


  test(){
    this.store.dispatch(loadTodos())
  }



}
