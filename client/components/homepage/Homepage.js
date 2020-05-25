import React from 'react'
import { Banner } from '../homepage'
import { ProductList, CategoriesList } from '../../components'

const filterFeatured = array => {
  return array.filter(index => index.featured)
}

const Hompage = ({ products, categories }) => (
  <div>
    {products && categories &&
      <div>
        <Banner />
        <ProductList products={filterFeatured(products)} featured />
        <CategoriesList categories={filterFeatured(categories)} />
      </div>
    }
  </div>
)

export default Hompage
