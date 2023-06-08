import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      // company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const { isFilterOpen, closeFilter } = useProductsContext()

  const categories = getUniqueValues(all_products, 'category')
  // const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  return (
    <Wrapper>
      <div className={`content ${isFilterOpen ? 'sidebar show-sidebar' : 'sidebar hide-sidebar'}`}>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters}
              className='search-input'
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          {/* <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div> */}
          {/* end of company */}
          {/* colors */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
              className='check-box'
            /></label>
           
          </div>
          {/* end of  shipping */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
        </div>
        <button className='close-btn' onClick={closeFilter}>
            <FaTimes />
      </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.content{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}

  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0rem;
    align-self:flex-start;
    margin-top:-1.5rem;
    margin-right:-1.5rem;
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }

  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }

  .check-box{
    margin-left:2rem;
  }
  .clear-btn {
    background: var(--clr-grey-5);
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
  }

  ${'' /* small show */}
  .sidebar {
    margin-bottom:2rem;
    padding:2rem;
    background: var(--clr-primary-8);
  }

  .hide-sidebar{
    display:none;
  }

  ${'' /* click/show */}
  .show-sidebar {
    transform: translate(0);
    transition: var(--transition);
    z-index: 999;
  }
  
  ${'' /* bigger show */}
  @media (min-width: 768px) {
    
    .sidebar{
    padding:0rem;
    display:block;
    background: white;
    }

    .content {
      position: sticky;
      top: 1rem;
      transition: var(--transition);
      transform: translate(0);
    }

    .close-btn{
      display:none;
    }
  }
`

export default Filters
