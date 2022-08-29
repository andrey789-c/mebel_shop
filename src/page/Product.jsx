import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Nav from '../components/Nav'

import classes from '../styles/Product.module.css'

const Product = ({products}) => {
    const {id} = useParams()

    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        products.forEach(product => {
            if(product.id === parseInt(id)) {
                setProduct(product)
                return
            }
        })
    }, [id])

    return (
        <div>
            <Nav />
            <Header />
            <Menu />
            <div className="container">
                {product === null ? '' : 
                    <div className={classes.block}>
                        <div className={classes.photo}>
                            <img src={product.photo} className={classes.img} alt="" />
                        </div>
                        <div className={classes.right}>
                            <div className={classes.title}>{product.title}</div>
                            <div className={classes.price}><span className={classes.price__old}>{product.old_price}руб.</span> {product.new_price}руб.</div>
                            <div className={classes.info}>В наличии</div>
                            <button className={classes.buy}>КУПИТЬ</button>
                            <button className={classes.button}>СДЕЛАТЬ ПРОЕКТ И ПРОСЧЕТ</button>
                            <button className={classes.button}>ГДЕ ПОСМОТРЕТЬ</button>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Product