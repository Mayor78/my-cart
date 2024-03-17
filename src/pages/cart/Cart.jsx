import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import {HomeContext} from '../../context/Home-context';
import  CartItem  from './CartItem'
import './cart.css'

import {useNavigate} from 'react-router-dom'



const Cart = () => {
    const {cartItems,getTotalCartAmount } =useContext(HomeContext);
    const totalAmount= getTotalCartAmount();
    const navigate =useNavigate()
  return (
    <div cart>
      <div>
        <h1>Your Cart Items</h1>
      </div>
     
      <div className='cartItems'> 

      {PRODUCTS.map((product) => {
        if (cartItems[product.id ] !==0){
            return<CartItem data={product}/>;
        }
      })}
      </div>
      {totalAmount>0?
      <div className='checkout'>
        
        <p>Subtotal:${totalAmount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>

      </div>
      : <h1>Your Cart Is Empty</h1>}
    </div>
  )
}

export default Cart
