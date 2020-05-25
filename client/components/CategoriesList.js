import React from 'react'
import { SingleCategory } from '../components'

const CategoriesList = ({ categories }) => (
  <div>
    {categories && categories.map(category => <SingleCategory category={category} key={category.id} />)}
  </div>
)

export default CategoriesList
