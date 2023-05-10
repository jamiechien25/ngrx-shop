import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as numReducer from './../store/reducers';
import { product } from '../interface/product';



export const selectFeature = (state: any) => state;

export const selectTodosState = createSelector(
  selectFeature,
  (state) => state.count
);

export const selectProduct = (state: product) => state;

export const selectProductState = createSelector(
  selectProduct,
  (state) => state
);




