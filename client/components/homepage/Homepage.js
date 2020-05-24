import React from 'react'
import { Banner } from '../homepage'
import { ProductList } from '../../components'

const filterFeaturedProd = products => {
  return products.filter(product => product.featured)
}

const Hompage = ({ products }) => {
  return (
    <div>
      {products &&
        <div>
          <Banner />
          <ProductList products={filterFeaturedProd(products)}  featured />
        </div>
      }
    </div>
  )
}

export default Hompage
