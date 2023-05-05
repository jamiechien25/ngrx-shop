import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment } from './actions';

export const counterFeatureKey = "counter";

export interface State {
  count: number
}

export const initialState: State = {
  count: 0
}

export const numReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('increment - state', state)
    return { count: state.count + 1 }
  }),
  on(decrement, (state) => {
    console.log('decrement - state', state)
    return { count: state.count - 1 }
  })
)

export const numReducer2 = (state = initialState, action: Action) => {
  console.log('state', state)
  console.log('state', state)
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };

    case 'decrement':
      return { ...state, count: state.count - 1 };

    default:
      return state
  }

}

