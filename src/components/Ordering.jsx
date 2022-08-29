import React from 'react'
import classes from '../styles/Ordering.module.css'

const Ordering = () => {
    return (
        <div className={classes.block}>
            <div className={classes.title}>ОФОРМЛЕНИЕ ЗАКАЗА</div>
            <form action="#" className={classes.form}>
                <div className={classes.form__item}>
                    <label className={classes.form__label} htmlFor="name">ФИО*</label>
                    <input className={classes.form__input} placeholder="Иванов Иван Иванович" type="text" id="name" />
                </div>
                <div className={classes.form__item}>
                    <label className={classes.form__label} htmlFor="city">Город*</label>
                    <input className={classes.form__input} placeholder="Москва" type="text" id="city" />
                </div>
                <div className={classes.form__item}>
                    <label className={classes.form__label} htmlFor="phone">Телефон*</label>
                    <input className={classes.form__input} placeholder="+7 (000) 000 00 00" type="text" id="phone" />
                </div>
                <div className={classes.form__item}>
                    <label className={classes.form__label} htmlFor="address">Адрес*</label>
                    <input className={classes.form__input} placeholder="ул. Московская 144, кв. 32" type="text" id="address" />
                </div>
            </form>
            <div className={classes.info}>* - поля, обязательные для заполнения</div>
        </div>
    )
}
export default Ordering