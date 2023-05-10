import { product } from 'src/app/interface/product';
import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, productActionadd, productActiondown } from './actions';


export const counterFeatureKey = "counter";



export interface products {
  products: product[]
}

export interface State {
  count: number
}

export const initialState: State = {
  count: 0
}

export const ProductState ={
products:[
  {
  id:1,
  productId: '1',
  productName: '商品A',
  productPrice: 123,
  productCount: 1,
  productDesc: '商品A細節',
},
{
  id:2,
  productId: '2',
  productName: '商品B',
  productPrice: 234,
  productCount: 1,
  productDesc: '商品B細節',
},
{
  id:3,
  productId: '3',
  productName: '商品C',
  productPrice: 124,
  productCount: 1,
  productDesc: '商品C細節',
},
{
  id:4,
  productId: '4',
  productName: '商品D',
  productPrice: 125,
  productCount: 1,
  productDesc: '商品D細節',
},
{
  id:5,
  productId: '5',
  productName: '商品E',
  productPrice: 128,
  productCount: 1,
  productDesc: '商品E細節',
},
{
  id:6,
  productId: '6',
  productName: '商品F',
  productPrice: 1111,
  productCount: 1,
  productDesc: '商品F細節',
},
{
  id:7,
  productId: '7',
  productName: '商品G',
  productPrice: 12312,
  productCount: 1,
  productDesc: '商品G細節',
},
{
  id:8,
  productId: '8',
  productName: '商品H',
  productPrice: 1233,
  productCount: 1,
  productDesc: '商品H細節',
}]
}

export const initialState2: State = {
  count: 0
}

// export const numReducer = createReducer(
//   initialState,
//   on(increment, (state) => {
//     console.log('increment - state', state)
//     return { count: state.count + 1 }
//   }),
//   on(decrement, (state) => {productActionadd
//     console.log('decrement - state', state)
//     return { count: state.count - 1 }
//   })
// )
export const numReducer =
createReducer(
  ProductState,
  on(productActionadd, (state , { item }) => {
    return { state, products: state.products.map((p) => p.id === item.id ? { ...p, productCount: p.productCount + 1 } : p) };
  }),


  on(productActiondown, (state , { item }) => {
    if(item.productCount <= 1 ) return state
    return { state, products: state.products.map((p) => p.id === item.id ? { ...p, productCount: p.productCount - 1 } : p) };
  }),
)


