import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { ADD_NUMBER, REMOVE_CART, SUB_NUMBER } from '../redux/constants'
import classes from '../styles/Cart.module.css'

const CartItem = ({product}) => {
    const dispatch = useDispatch()

    function subNumber() {
        if(product.number > 1) {
            dispatch({type: SUB_NUMBER, value: product})
        }
    }

    return (
        <div className={classes.item} key={product.id}>
                    <div className={classes.img}><img src={product.photo} alt="" /></div>
                    <div className={classes.name}>{product.title}</div>
                    <div className={classes.number}>
                        <button onClick={subNumber} className={[classes.sub, classes.btn].join(' ')}>-</button>
                        <div className={classes.num}>{product.number}</div>
                        <button onClick={e => dispatch({type: ADD_NUMBER, value: product})} className={[classes.add, classes.btn].join(' ')}>+</button>
                    </div>
                    <div className={classes.price}>{product.finalPrice} руб.</div>
                    <button onClick={e => dispatch({type: REMOVE_CART, value: product})} className={classes.close}>&times;</button>
                </div>
    )
}
export default CartItem