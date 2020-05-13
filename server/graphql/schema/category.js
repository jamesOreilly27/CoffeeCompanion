const { Category, Product } = require('../../db/models')

const categoryResolver = () => {
  return Category.findAll()
  .then(categories => categories)
  .catch(err => console.log(err))
}

const singleCategoryResolver = (parents, args) => {
  return Category.findByPk(args.id)
  .then(category => category)
  .catch(err => console.log(err))
}

module.exports = { categoryResolver, singleCategoryResolver }
