import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../App'

const Header = () => {
  const productContextValue = useContext(ProductContext);
  const {cart} = productContextValue
  return (
    <header>
        <h1>Nike Store</h1>
        <p>Shopping Cart: { cart.length > 0 ? cart.length : null }</p>
    </header>
  )
}

export default Header