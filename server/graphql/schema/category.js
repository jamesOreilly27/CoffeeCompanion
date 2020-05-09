const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { Category, ProductCategory } = require('../../db/models')
const ProductType = require('./product')

const CategoryType = new GraphQLObjectType({
  name: 'category',
  description: 'Different groupings of products',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphqlString) },
    description: { type: GraphQLNonNull(GraphqlString) },
    products: {
      type: ProductType,
      resolve: category => {
        return //Placeholder for the ProductCategory query we'll write in a minute
      }
    }
  })
})