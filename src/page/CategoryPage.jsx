import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Nav from '../components/Nav'
import ProductItem from '../components/ProductItem'
import classes from '../styles/Products.module.css'

const CategoryPage = ({products}) => {
    const {category} = useParams()

    const [filterArr, setFilterArr] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        setFilterArr(products.filter(product => product.category == category))
        
        switch (category) {
            case 'citchens':
                setTitle('Кухни')
                break
            case 'living':
                setTitle('Гостинные')
                break
            case 'bed': 
                setTitle('Спальни')
                break
            case 'hallways':
                setTitle('Прихожие')
                break
            case 'cupboard': 
                setTitle('Шкафы-купе')
                break
            case 'children':
                setTitle('Детские')
                break
            case 'sofa':
                setTitle('Диваны')
                break
            default:
                break;
        }

    }, [category])

    return (
        <div>
            <Nav />
            <Header />
            <Menu />
            <div className="container">
                <div className={classes.title}>{title}</div>
                {filterArr.map(product => {
                    return (
                        <ProductItem key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}
export default CategoryPage