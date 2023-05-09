import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { product } from 'src/app/interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  showNumber$?: Observable<any>;
  show?: number;
  productInfo:product[] = []

  constructor(
    private store: Store<{ counter: any }>
  ) {
    this.showNumber$ = store.select('counter')
  }

  ngOnInit(): void {
    this.store.subscribe(data => { console.log('ALL STORE DATA', data) })
    this.showNumber$!.subscribe(data => {
      this.show! = data.count
    })

    this.productInfo = [
      {
        productId: 'productNo1',
        productName: '商品A',
        productPrice: 123,
        productCount: 1,
        productDesc: '商品A細節',
      },
      {
        productId: 'productNo2',
        productName: '商品B',
        productPrice: 234,
        productCount: 1,
        productDesc: '商品B細節',
      },
      {
        productId: 'productNo3',
        productName: '商品C',
        productPrice: 124,
        productCount: 1,
        productDesc: '商品C細節',
      },
      {
        productId: 'productNo4',
        productName: '商品D',
        productPrice: 125,
        productCount: 1,
        productDesc: '商品D細節',
      },
      {
        productId: 'productNo5',
        productName: '商品E',
        productPrice: 128,
        productCount: 1,
        productDesc: '商品E細節',
      },
      {
        productId: 'productNo6',
        productName: '商品F',
        productPrice: 1111,
        productCount: 1,
        productDesc: '商品F細節',
      },
      {
        productId: 'productNo7',
        productName: '商品G',
        productPrice: 12312,
        productCount: 1,
        productDesc: '商品G細節',
      },
      {
        productId: 'productNo8',
        productName: '商品H',
        productPrice: 1233,
        productCount: 1,
        productDesc: '商品H細節',
      },
    ] as product[]


  }

  incrementNum() {
    this.store.dispatch({
      type: 'increment'
    })
  }

  decrementNum() {
    this.store.dispatch({
      type: 'decrement'
    })
  }

  addCart(){}




}
