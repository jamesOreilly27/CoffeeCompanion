const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { productResolver, productDetailResolver } = require('./product')
const { categoryResolver } = require('./category')
const { cartResolver } = require('./cart')
const { CategoryType, ProductType, ProductDetailType, CartType } = require('./ObjectTypes')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      description: 'list of all products',
      resolve: productResolver
    },
    categories: {
      type: new GraphQLList(CategoryType),
      description: 'List of all categories',
      resolve: categoryResolver
    },
    productDetails: {
      type: ProductDetailType,
      description: 'details for a product',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: productDetailResolver
    },
    cart: {
      type: new GraphQLList(CartType),
      description: 'a customer cart',
      resolve: cartResolver
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

module.exports = schema
