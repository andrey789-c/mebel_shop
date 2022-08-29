import React from 'react'


import classes from '../styles/Cart.module.css'
import CartItem from './CartItem'

const CartList = ({cartList}) => {
    
    return (
        <div className={classes.cart__block}>
            {cartList.length === 0 ? <div>Вы еще ничего не добавили в корзину</div> : 
                cartList.map(product => (
                    <CartItem product={product} key={product.id}/>
                ))
            }
        </div>
    )
}
export default CartList