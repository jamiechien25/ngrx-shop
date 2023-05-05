import { createAction, props } from '@ngrx/store';
import { product } from '../interface/product';


// +
export const increment = createAction("increment");

// -
export const decrement = createAction("decrement");


export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

