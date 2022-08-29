import {combineReducers, createStore} from 'redux'
import { cartReducer } from './cartReducer'

const reducers = combineReducers({cartReducer})

export const store = createStore(reducers)