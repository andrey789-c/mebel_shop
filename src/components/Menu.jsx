import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Menu.module.css'

const Menu = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.menu}>
                    <Link to='/category/kitchens' className={classes.item}>Кухни</Link>
                    <Link to='/category/living' className={classes.item}>Гостинные</Link>
                    <Link to='/category/bed' className={classes.item}>Спальни</Link>
                    <Link to='/category/hallways' className={classes.item}>Прихожие</Link>
                    <Link to='/category/cupboard' className={classes.item}>Шкафы-купе</Link>
                    <Link to='/category/children' className={classes.item}>Детские</Link>
                    <Link to='/category/sofa' className={classes.item}>Диваны</Link>
                    <Link to='/' className={[classes.item, classes.main].join(' ')}>Где посмотреть</Link>
                </div>
            </div>
        </div>
    )
}
export default Menu