import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { REMOVE_ALL } from '../redux/constants'

import classes from '../styles/FinalCart.module.css'
import FormCart from './FormCart'

const FinalCart = () => {

    const cart = useSelector(state => state.cartReducer)
    const [totalPrice, setTotalPrice] = useState(0);

    const check = useRef()
    const [isLoad, setIsLoad] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setTotalPrice(cart.reduce((sum, current) => {
            return sum + current.finalPrice
        }, 0))
    }, [cart])

    const buttonClick = () => {
        alert('Заказ отправлен')
        dispatch({type: REMOVE_ALL})
    }

    return (
        <div className={classes.left}>
            <FormCart />
            <div className={classes.block__total}>
                <div className={classes.total__left}>
                    <div className={[classes.title, classes.subtitle].join(' ')}>Итого:</div>
                    <div className={classes.info}>Стоимость указана без учета доставки</div>
                </div>
                <div className={classes.total__price}>{totalPrice} руб.</div>
            </div>
            <div className={classes.rules}>
                <input ref={check} checked={isLoad} onChange={e => setIsLoad(!isLoad)} className={classes.rules__checkbox} type="checkbox" id='rule'/> <label className={classes.rules__info} htmlFor="rule">Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.</label>
            </div>
            <button disabled={!isLoad} className={classes.button}><Link className={classes.button__link} to={'/'} onClick={buttonClick}>ПОДТВЕРДИТЬ ЗАКАЗ</Link></button>
        </div>
    )
}
export default FinalCart