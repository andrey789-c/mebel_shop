import React from 'react'
import classes from '../styles/Nav.module.css'
import label from '../img/label.png'

const Nav = () => {
    return (
        <div className='container'>
            <div className={classes.nav}>
                <div className={classes.nav__left}>
                    <div className={classes.city}>
                        <img className={classes.img_city} src={label} alt=""/>
                        <div className={classes.city__name}>Ростов</div>
                    </div>
                    <a href='#' className={classes.nav__item}>Акции</a>
                    <a href='#' className={classes.nav__item}>Сборка</a>
                    <a href='#' className={classes.nav__item}>Оплата</a>
                    <a href='#' className={classes.nav__item}>Доставка</a>
                </div>

                <div className={classes.nav__right}>
                    <a href='#' className={classes.nav__item}>Наши работы</a>
                    <a href='#' className={classes.nav__item}>Контакты</a>
                </div>
            </div>
        </div>
    )
}
export default Nav