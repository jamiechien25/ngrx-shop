import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { product } from 'src/app/interface/product';
import { CartActionadd, CartActiondown } from 'src/app/store/actions';
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
  setOfCheckedId = new Set<number>();
  cartProsuctList: product[] = []
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(Number(data.productId), index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(Number(data.productId), index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];


  constructor(
    private store: Store<{ counter: products }>
  ) {}

  ngOnInit(): void {

    this.store.subscribe(x => {
      this.cartProsuctList = x.counter.cart.filter(x => x.productId != '');
    })

  }

  incrementNum(item: product) {
    this.store.dispatch(CartActionadd({ item }))
  }


  decrementNum(item: product) {
    this.store.dispatch(CartActiondown({ item }))
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(Number(item.productId), value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly product[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(Number(item.productId)));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(Number(item.productId))) && !this.checked;
  }





}
