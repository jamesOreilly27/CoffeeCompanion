const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { ProductType, productResolver } = require('./product')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      description: 'list of all products',
      resolve: productResolver
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

module.exports = schema
