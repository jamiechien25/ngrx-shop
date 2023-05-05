import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as numReducer from './../store/reducers';

export const selectFeature = (state: any) => state;

export const selectTodosState = createSelector(
  selectFeature,
  (state) => state.count
);
