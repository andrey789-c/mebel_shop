import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import { useSelector } from 'react-redux'

import classes from '../styles/Cart.module.css'
import CartList from '../components/CartList'
import FinalCart from '../components/FinalCart'
import Ordering from '../components/Ordering'

const Cart = () => {

    const cartProducts = useSelector(state => state.cartReducer)

    return (
        <div>
            <Nav />
            <Header />
            <Menu />
            <div className="container">
                <div className={classes.title}>Корзина</div>
                {cartProducts.length === 0 ? <div>Вы еще ничего не добавили в корзину</div> : 
                    <div className={classes.block}>
                        <div className={classes.right}>
                            <CartList cartList={cartProducts}/>
                            <Ordering />
                        </div>
                        <FinalCart />
                    </div>
                }
                
            </div>
            
            
        </div>
    )
}
export default Cart