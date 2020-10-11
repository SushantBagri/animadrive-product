import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Product_card({ id, name, price, pic_src, description }) {
    const [product, setProduct, removeProduct] = useCookies()

    const [changeClass, setChangeClass] = useState('')
    const [product_id, setProduct_id] = useState()

    const changeCSS = () => {
        (window.innerWidth > 400)
            ? setChangeClass('btn_large')
            : setChangeClass('btn_medium')
    }

    const handleAddToCart = ({ id, name, pic_src, price, description }) => {
        setProduct_id(id)
        setProduct(`product_${id}`, { id: id, title: name, price: price, image: pic_src, desc: description, quantity: 1 }, { path: '/' })
    }

    const onhandleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
    }

    useEffect(() => {
        window.addEventListener('load', changeCSS)
    }, [])


    return (
        <>
            <li className='card_item'>
                <Link to='/products' className='card_item_link'>
                    <figure className='card_item_pic-wrap'>
                        <img src={pic_src} alt={id} className='card_item_image' />
                    </figure>
                    <div className='card_item_info'>
                        <h1 className='card_item_text'>{name}</h1>
                        <h1>Price: {price}</h1>
                        <div className='product_description'>
                            <p>{description}</p>
                        </div>
                        <div className='product_btn'>
                            <Button className='btn' buttonStyle='btn_outline' onClick={() => handleAddToCart({ id, name, price, pic_src, description })} >Add to cart</Button>
                            <Button buttonStyle='btn_outline' onClick={() => onhandleRemoveProduct(id)} >Buy now</Button>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Product_card;
