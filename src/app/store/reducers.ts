
import { product } from 'src/app/interface/product';
import { createReducer, on, Action } from '@ngrx/store';
import { CartActionDelete, CartActionadd, CartActiondown, CheckOutProduct, productActionCart, productActionadd, productActiondown } from './actions';


export const counterFeatureKey = "counter";

export interface products {
  products: product[]
  cart: product[]
}


export const ProductState = {
  products: [
    {
      productId: '1',
      productName: '商品A',
      productPrice: 123,
      productCount: 1,
      productDesc: '商品A細節',
    },
    {
      productId: '2',
      productName: '商品B',
      productPrice: 234,
      productCount: 1,
      productDesc: '商品B細節',
    },
    {
      productId: '3',
      productName: '商品C',
      productPrice: 124,
      productCount: 1,
      productDesc: '商品C細節',
    },
    {
      productId: '4',
      productName: '商品D',
      productPrice: 125,
      productCount: 1,
      productDesc: '商品D細節',
    },
    {
      productId: '5',
      productName: '商品E',
      productPrice: 128,
      productCount: 1,
      productDesc: '商品E細節',
    },
    {
      productId: '6',
      productName: '商品F',
      productPrice: 1111,
      productCount: 1,
      productDesc: '商品F細節',
    },
    {
      productId: '7',
      productName: '商品G',
      productPrice: 12312,
      productCount: 1,
      productDesc: '商品G細節',
    },
    {
      productId: '8',
      productName: '商品H',
      productPrice: 1233,
      productCount: 1,
      productDesc: '商品H細節',
    }],
  cart: [

  ] as product[]

}


export const numReducer = createReducer(
  ProductState,
  on(productActionadd, (state, { item }) => {
    return { ...state, products: state.products.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount + 1 } : p) };
  }),


  on(productActiondown, (state, { item }) => {
    if (item.productCount <= 1) return state
    return { ...state, products: state.products.map((p) => p.productId === item.productId ? { ...p, productCount: p.productCount - 1 } : p) };
  }),

  on(productActionCart, (state, { item }) => {
    let update:product[];
    if(state.cart.filter(x=> x.productId === item.productId ).length > 0){
      update = state.cart.map(p=>p.productId === item.productId ? {...p,productCount:p.productCount+ item.productCount}:p)
    }else{
      update = [...state.cart, item]
    }
   return {...state, cart: update }
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
    let deleteItem = [...state.cart] ;
   return {...state, cart: deleteItem.filter(x=> x.productId !== item.productId) }
  }
  ),

  on(CheckOutProduct, (state, { item }) => {
    // let refreshItem :product[];
    // refreshItem = [...state.cart,item] ;
   return {...state, cart: item }
  }
  ),
)




