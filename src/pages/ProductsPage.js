import React from 'react'
import styled from 'styled-components'
import { FaFilter } from 'react-icons/fa'
import { Filters, ProductList, Sort, PageHero } from '../components'
// import { useProductsContext } from '../context/products_context'
const ProductsPage = () => {
  // const {openFilter } = useProductsContext()
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
        
        {/* <div className='filter-icon'>
            <button onClick = {openFilter}>
            Filter <FaFilter />
            </button>
        </div> */}
          <Filters />
    
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
  
    margin: 4rem auto;
  }

  @media screen and (min-width: 992px) {
    ${'' /* .products {
      gap: 3rem 1.5rem;
    } */}
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
