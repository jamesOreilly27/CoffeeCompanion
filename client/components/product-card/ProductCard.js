import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    {product.name}
  </Link>
)

export default ProductCard
