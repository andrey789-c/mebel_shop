import React from 'react'
import classes from '../styles/Products.module.css'
import ProductItem from './ProductItem'

const ProductsList = ({products}) => {
    return (
        <div className='container'>
            <div className={classes.title}>Популярные товары</div>
            <div className={classes.list}>
                {products.map(product => (
                        <ProductItem product={product} key={product.id}/>
                    )
                )}
            </div>
        </div>
    )
}
export default ProductsList