const { Product } = require('../../db/models')

const productResolver = (parent, args, request) => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

const productDetailResolver = (parent, args) => {
  return Product.findByPk(args.id)
  .then(product => product)
  .catch(err => console.log(err))
}

module.exports = { productResolver, productDetailResolver }
