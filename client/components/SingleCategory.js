import React from 'react'
import { ProductList } from '../components'

const SingleCategory = ({ category }) => (
  <div>
    <ProductList products={category.products} category={category} />
  </div>
)

export default SingleCategory
