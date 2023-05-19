import { ProductService } from './../service/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { loadTodos, loadTodosSuccess } from './actions';
import { HttpClient } from '@angular/common/http';
import { product } from '../interface/product';
import { products } from './reducers';

@Injectable()
export class TodosEffects {

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      // 在這裡只處理 TodosActions.loadTodos 這個 Action
      ofType(loadTodos),
      concatMap((action) => this.productService.getPosts().pipe(
        map((result:products) => {return loadTodosSuccess({ items: result })}),
        catchError(error => of(loadTodosFailure({ error }))))
    )
    )
  })

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private productService:ProductService) { }
}

function loadTodosFailure(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}
