import { createAction, props } from '@ngrx/store';
import { product } from '../interface/product';


// +
export const productActionadd = createAction("productActionadd",
  props<{ item: product }>());

// -
export const productActiondown = createAction("productActiondown",
  props<{ item: product }>());

// add to cart
export const productActionCart = createAction("productActionCart",
  props<{ item: product }>());
