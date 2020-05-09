const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { productResolver } = require('./product')
const { categoryResolver } = require('./category')
const { CategoryType, ProductType } = require('./ObjectTypes')

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
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

module.exports = schema
