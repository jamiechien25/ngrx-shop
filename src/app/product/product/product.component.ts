import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodosState } from 'src/app/store/selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  showNumber$?: Observable<any>;
  show?: number;

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

}
