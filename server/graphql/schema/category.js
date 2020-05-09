const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { Category, Product } = require('../../db/models')
const { ProductType, productResolver } = require('./product')

const CategoryType = new GraphQLObjectType({
  name: 'category',
  description: 'Different groupings of products',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    products: {
      type: new GraphQLList(ProductType),
      description: 'category products',
      resolve: category => {
        return category.getProducts()
        .then(products => products)
        .catch(err => console.log(err))
      }
    }
  })
})

//{ where: { categoryId: category.id }}

const categoryResolver = () => {
  return Category.findAll()
  .then(categories => categories)
  .catch(err => console.log(err))
}

module.exports = {
  CategoryType,
  categoryResolver
}
