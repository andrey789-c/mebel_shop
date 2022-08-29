import React from 'react'
import classes from '../styles/FinalCart.module.css'

const FormCart = () => {
    return (
        <div>
            <div className={classes.title}>Выберите способ доставки</div>
            <div className={classes.check}>
                <div className={classes.check__form}>
                    <input className={classes.radio} id="pickup" type="radio" name='type' defaultChecked/> <label htmlFor='pickup'>Самовывоз</label>
                </div>
                <div className={classes.check__form}>
                    <input className={classes.radio} id="delivery" type="radio" name='type' /> <label htmlFor='delivery'>Доставка</label>
                </div>
            </div>
            <div className={[classes.title, classes.subtitle].join(' ')}>Выберите способ оплаты</div>
            <div className={classes.check}>
                <div className={classes.check__form}>
                    <input className={classes.radio} id="cash" type="radio" name='pay' defaultChecked/> <label htmlFor='cash'>Наличные</label>
                </div>
                <div className={classes.check__form}>
                    <input className={classes.radio} id="card" type="radio" name='pay' /> <label htmlFor='card'>Оплата картой</label>
                </div>
            </div>
        </div>
    )
}
export default FormCart