import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    {product.name}
  </Link>
)

export default SingleProduct
