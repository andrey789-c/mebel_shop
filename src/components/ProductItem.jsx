import React from 'react'

import { useSelector, useDispatch } from 'react-redux/es/exports'

import classes from '../styles/Products.module.css'
import like from '../img/header/like.png'
import { ADD_CART } from '../redux/constants'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
    const dispatch = useDispatch()
    const select = useSelector(state => state.cartReducer)

    function addCart(product) {
        let searchItem = select.find(item => item.id === product.id)
        if(searchItem === undefined) {
            dispatch({type: ADD_CART, value: product})
        }
    }

    return (
            <div className={classes.item}>
                <Link to={`/${product.id}`} className={classes.photo}>
                    <img src={product.photo} alt="" />
                </Link>
                <div className={classes.item__title}>{product.title}</div>
                <div className={classes.prices}>
                    <div className={classes.prices__old}>{product.old_price} руб.</div>
                    <div className={classes.prices__new}>{product.new_price} руб.</div>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.buy} onClick={e => addCart(product)}>Купить</button>
                    <button className={classes.like}>
                        <img src={like} alt="" />
                    </button>
                </div>
            </div>
    )
}
export default ProductItem