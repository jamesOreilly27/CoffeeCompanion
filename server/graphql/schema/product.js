const { GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean } = require('graphql')
const { Product } = require('../../db/models')
const { ProductType, ProductDetailType } = require('./ObjectTypes')

//Resolvers
const productResolver = () => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

const productDetailResolver = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => product)
  .catch(err => console.log(err))
}

const getByNameResolver = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => product)
  .catch(err => console.log(err))
}

const upsert = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => {
    if(product) {
      return product.update(args)
    }
    else {
      return Product.create(args)
    .then(product => product)
    .catch(err => console.log(err))
    }
  })
}

const destroy = (parent, args) => {
  return Product.destroy({ where: { name: args.name } })
  .then(() => args.name)
  .catch(err => console.log(err))
}

//Fields
const products = {
  type: new GraphQLList(ProductType),
  description: 'list of all products',
  resolve: productResolver
}

const productDetails = {
  type: ProductDetailType,
  description: 'details for a product',
  args: { name: { type: GraphQLString }},
  resolve: productDetailResolver
}

const getProductByName = {
  type: ProductDetailType,
  description: 'find a product by name',
  args: { name: { type: GraphQLString } },
  resolve: getByNameResolver
}

const upsertProduct = {
  type: ProductDetailType,
  description: 'Add a product to the database',
  args: {
    name: { type: GraphQLString },
    vendor: { type: GraphQLString },
    description: { type: GraphQLString },
    partNumber: { type: GraphQLString },
    cost: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    laborTime: { type: GraphQLFloat },
    image: { type: GraphQLString },
    featured: { type: GraphQLBoolean }
  },
  resolve: upsert
}

const destroyProduct = {
  type: GraphQLString,
  description: 'Remove a Product from the database',
  args: { name: { type: GraphQLString } },
  resolve: destroy
}

module.exports = {
  products,
  productDetails,
  getProductByName,
  upsertProduct,
  destroyProduct
}
