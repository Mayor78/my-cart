import React from 'react'
import { PRODUCTS } from '../../Products';
import Product from './Product' 
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeTitle'>
        <h1>Abraham mall</h1>
      </div>
      <div className='products'> {PRODUCTS.map((product)=>(

        <Product data={product} />

        ))}</div>

     
      
    </div>
  )
}

export default Home
