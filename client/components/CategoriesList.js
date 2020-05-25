import React from 'react'
import { SingleCategory } from '../components'

const CategoriesList = ({ categories }) => {
  console.log('CATEGORIES', categories)
  return (
    <div>
      {categories && categories.map(category => <SingleCategory category={category} key={category.id} />)}
    </div>
  )
}

export default CategoriesList
