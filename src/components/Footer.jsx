import React from 'react'
import classes from '../styles/Footer.module.css'

import logo from '../img/logo_footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.block}>
                    <div className={classes.right}>
                        <img src={logo} className={classes.logo} alt="" />
                        <div className={classes.phone}>8-961-525-91-91</div>
                        <div className={classes.item}><span className={classes.value}>Время</span> с 10:00 до 19:00</div>
                        <div className={classes.item}><span className={classes.value}>Адрес</span> Краснодар, <br />ул. Московская 144 корп. - 1</div>
                        <div className={classes.item}><span className={classes.value}>Почта</span> mebelarko@mail.ru</div>
                    </div>
                    <ul className={classes.list}>
                        <Link to={'/category/kitchens'} className={classes.list__link}>Кухни</Link>
                        <Link to={'/category/living'} className={classes.list__link}>Гостинные</Link>
                        <Link to={'/category/bed'} className={classes.list__link}>Спальни</Link>
                        <Link to={'/category/hallways'} className={classes.list__link}>Прихожие</Link>
                        <Link to={'/category/cupboard'} className={classes.list__link}>Шкафы-купе</Link>
                        <Link to={'/category/children'} className={classes.list__link}>Детские</Link>
                        <Link to={'/category/sofa'} className={classes.list__link}>Диваны</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer