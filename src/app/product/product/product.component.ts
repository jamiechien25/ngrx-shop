
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { product } from 'src/app/interface/product';
import { productActionCart, productActionadd, productActiondown } from 'src/app/store/actions';
import { products } from 'src/app/store/reducers';
import { selectProductState } from 'src/app/store/selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  show$?: Observable<any>;
  // show?: number;
  productInfo: product[] = []
  productdata: any = [];


  constructor(
    private store: Store<{ counter: products }>
  ) {
    this.show$ = store.select('counter')
  }

  ngOnInit(): void {
    this.store.subscribe(data => {
      console.log('ALL STORE DATA', data)
      this.productdata = data.counter
    })
    this.show$!.subscribe((data) => {
      this.productInfo = data.products
      console.log(this.productInfo)
      // this.show! = data[item.id!].productCount
    })

  }


  incrementNum(item: product) {
    // item.productCount! +=1
    this.store.dispatch(productActionadd({ item }))
  }

  decrementNum(item: product) {
    // item.productCount! -=1
    this.store.dispatch(productActiondown({ item }))
    console.log(item)
  }

  add(item: product) {
    this.store.dispatch(productActionCart({item}))
    this.show$!.subscribe(data => {
      console.log(item)
      console.log( data.products[item.id! - 1])
    })
    // console.log(item)
  }








}
