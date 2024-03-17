import React, { useContext } from 'react';
import './home.css';

import {HomeContext} from '../../context/Home-context'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(HomeContext)
    const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} alt='' />
      <div className='description'>
        <p><b>{productName}</b></p>

        <p>${price}</p>

      </div>
        <button className='addTCartBttn' onClick={()=> addToCart(id)}>Add To Cart {cartItemsAmount > 0 &&<>({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product
