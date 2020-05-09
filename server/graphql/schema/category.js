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
        return ProductCategory.findAll({ where: { categoryId: category.id }})
        .then(products => products)
      }
    }
  })
})
