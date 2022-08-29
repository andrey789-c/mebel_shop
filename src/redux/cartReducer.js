import { ADD_CART, ADD_NUMBER, REMOVE_ALL, REMOVE_CART, SUB_NUMBER } from "./constants"

const initialState = []

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CART:
            return [...state, action.value]
        case REMOVE_CART: 
            return state.filter(value => {
                if(value.id !== action.value.id) {
                    return true
                } else {
                    return false
                }
            })
        case ADD_NUMBER:
            return state.map(item => item.id === action.value.id ? {...item, number: item.number+1, finalPrice: item.new_price + item.finalPrice} : item)
        case SUB_NUMBER:
            return state.map(item => item.id === action.value.id ? {...item, number: item.number-1, finalPrice: item.finalPrice - item.new_price}  : item)
        case REMOVE_ALL:
            return []
        default:
            return state
    }
}