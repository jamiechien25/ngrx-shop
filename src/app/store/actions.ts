import { createAction, props } from '@ngrx/store';
import { product } from '../interface/product';
import { products } from './reducers';


// +
export const productActionadd = createAction("productActionadd",
  props<{ item: product }>());

// -
export const productActiondown = createAction("productActiondown",
  props<{ item: product }>());

// add to cart
export const productActionCart = createAction("productActionCart",
  props<{ item: product }>());


// Cart +
export const CartActionadd = createAction("CartActionadd",
  props<{ item: product }>());

// Cart -
export const CartActiondown = createAction("CartActiondown",
  props<{ item: product }>());


// Cartdelete
export const CartActionDelete = createAction("CartActionDelete",
  props<{ item: product }>());

// Go CheckOutProduct
export const CheckOutProduct = createAction("CheckOutProduct",
  props<{ NewArr: string[] }>());


  export const loadTodos = createAction(
    '[Todos] Load Todos'
  );

  export const loadTodosSuccess = createAction(
    '[Todos] Load Todos Success',
    props<{ items: products }>()
  );

  export const loadTodossFailure = createAction(
    '[Todos] Load Todos Failure',
    props<{ error: any; }>()
  );


  //  CheckOutTotal
export const CheckOutTotal = createAction("CheckOutTotal",
);
