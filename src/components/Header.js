import React from 'react'

const Header = ({ shoppingItems }) => {
  return (
    <header>
        <h1>Nike Store</h1>
        <p>Shopping Cart: { shoppingItems.length }</p>
    </header>
  )
}

export default Header