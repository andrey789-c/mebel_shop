import React, { useState } from 'react'

import {NavLink, Link} from 'react-router-dom'

import classes from '../styles/Header.module.css'
import logo from '../img/logo.png'
import zoom from '../img/zoom.png'
import phone from '../img/header/phone.png'
import profile from '../img/header/profile.png'
import like from '../img/header/like.png'
import cart from '../img/header/cart.png'

const Header = () => {

    return (
        <div className={classes.wrapper}>
            <div className='container'>
                <div className={classes.header}>
                    <Link to="/" className={classes.logo}>
                        <img src={logo} alt=""/>
                    </Link>
                    <div className={classes.address}>
                        <div className={classes.address__name}>ул. Московская, 144/2</div>
                        <a href='#' className={classes.link}>Схема проезда</a>
                    </div>
                    <div className={classes.found}>
                        <input type="text" className={classes.input} placeholder="Поиск"/>
                        <button className={classes.zoom}><img src={zoom} alt="" /></button>
                    </div>
                    <div className={classes.contacts}>
                        <div className={classes.phone}>
                            <img className={classes.phone__img} src={phone} alt=""/>
                            <div className={classes.phone__text}>8 (961) 525 91 91</div>
                        </div>
                        <button className={classes.order}>Заказать звонок</button>
                    </div>
                    <button className={classes.item}>
                        <img src={profile} className={classes.item__icon} alt="" />
                        <div className={classes.item__text}>Войти</div>
                    </button>
                    <button className={classes.item}>
                        <img src={like} className={classes.item__icon} alt="" />
                        <div className={classes.item__text}>Избранное</div>
                    </button>
                    <NavLink to='/cart' className={classes.item}>
                        <img src={cart} className={classes.item__icon} alt="" />
                        <div className={classes.item__text}>Корзина</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header