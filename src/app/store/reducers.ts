
import { product } from 'src/app/interface/product';
import { createReducer, on, Action } from '@ngrx/store';
import { CartActionDelete, CartActionadd, CartActiondown, CheckOutProduct, CheckOutTotal, loadTodos, loadTodosSuccess, loadTodossFailure, productActionCart, productActionadd, productActiondown } from './actions';


export const counterFeatureKey = "counter";

export interface products {
  products: product[]
  cart: product[]
  checkOut: product[]
  Total:number
}


export const ProductState = {
  products: [] as product[],
  cart: [] as product[],
  checkOut: [] as product[],
  Total:0

}


export const numReducer = createReducer(
  ProductState,
  on(loadTodossFailure, (state, action) => state),



  on(productActionadd, (state, { item }) => {
    return { ...state, products: state.products.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount + 1 } : p) };
  }),


  on(productActiondown, (state, { item }) => {
    if (item.productCount <= 1) return state
    return { ...state, products: state.products.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount - 1 } : p) };
  }),

  on(productActionCart, (state, { item }) => {
    let update: product[];
    if (state.cart.filter(x => x.productId === item.productId).length > 0) {
      update = state.cart.map(p => p.productId === item.productId ? { ...p, productCount: p.productCount + item.productCount } : p)
    } else {
      update = [...state.cart, item]
    }
    return { ...state, cart: update }
  }
  ),

  on(CartActionadd, (state, { item }) => {
    return { ...state, cart: state.cart.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount + 1 } : p) };
  }),


  on(CartActiondown, (state, { item }) => {
    if (item.productCount <= 1) return state
    return { ...state, cart: state.cart.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount - 1 } : p) };
  }),



  on(CartActionDelete, (state, { item }) => {
    let deleteItem = [...state.cart];
    return { ...state, cart: deleteItem.filter(x => x.productId !== item.productId) }
  }
  ),



  on(CheckOutProduct, (state, { NewArr }) => {
    let CheckOutList: product[]
    CheckOutList = state.cart.filter(x => NewArr.includes(x.productId))
    let CartList: product[]
    CartList = state.cart.filter(x => !NewArr.includes(x.productId))
    return { ...state, cart: CartList, checkOut: CheckOutList }
  }
  ),

  on(loadTodosSuccess, (state, { items }) => {
    console.log(items)
    return { ...state, products:items.products ,cart:items.cart,checkOut:items.checkOut }
  }
  ),


  on(CheckOutTotal, (state) => {
    let Total:number
    Total = state.checkOut.reduce((total, item) => {
      console.log('total', total)
      console.log('item', item)
      return total + item.productPrice * item.productCount
    }, 0)
    return { ...state,Total}
  }
  ),



)




