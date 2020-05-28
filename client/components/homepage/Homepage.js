import React from 'react'
import { Banner } from '../homepage'
import { ProductList, CategoriesList } from '../../components'
import { filterFeatured } from '../helpers'

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
