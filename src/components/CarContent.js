import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { BsArrowLeft } from 'react-icons/bs'
const CartItems = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
        continue shopping
        </Link>
        <button
          type='button'
          className='clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: 2rem;
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    padding:.5rem;
  }
  .clear-btn {
    color: var(--clr-primary-5);
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    text-decoration: underline;
  }

  .clear-btn:hover{
    color: var(--clr-grey-5);
  }
`
export default CartItems
