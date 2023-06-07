import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList, BsFilter } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  const {isFilterOpen, openFilter } = useProductsContext()
  return (
    <Wrapper>
    <div class = "flex-container">
      <div className='btn-container'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <div className='filter-icon'>
            <button className={`btn ${isFilterOpen ? 'hide-btn' : 'show-btn'}`} onClick = {openFilter}>
            Filter <FaFilter />
            </button>
      </div>
     </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
    .flex-container{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;

    .filter-icon{
      display:none;

    }
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }

  .hide-btn{
    display:none;
  }
  .show-btn{
    display:block;
  }

`

export default Sort
