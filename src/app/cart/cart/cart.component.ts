import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { product } from 'src/app/interface/product';
import { CartActionDelete, CartActionadd, CartActiondown, CheckOutProduct } from 'src/app/store/actions';
import { products } from 'src/app/store/reducers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly product[] = [];
  setOfCheckedId = new Set<string>();
  cartProsuctList: product[] = []




  constructor(
    private store: Store<{ counter: products }>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.store.subscribe(x => {
      this.cartProsuctList = x.counter.cart;
    })

  }

  incrementNum(item: product) {
    this.store.dispatch(CartActionadd({ item }))
  }


  decrementNum(item: product) {
    this.store.dispatch(CartActiondown({ item }))
  }

  updateCheckedSet(id: string, checked: boolean): void {
    console.log('updateCheckedSet', id, checked)
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    console.log(' onItemChecked', id, checked)
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.productId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly product[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    console.log(this.listOfCurrentPageData)

    this.checked = this.listOfCurrentPageData.every(item => { this.setOfCheckedId.has(item.productId) });
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.productId)) && !this.checked;
  }

  del(item: product) {
    this.store.dispatch(CartActionDelete({ item }))
  }

  buy() {
    if(this.cartProsuctList.length > 0){
      this.router.navigate(['../checkout'], { relativeTo: this.route });
    }else{
      window.alert('目前無商品可以結帳')
    }
  }
}
