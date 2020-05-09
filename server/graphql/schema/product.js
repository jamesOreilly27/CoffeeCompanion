const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const Product = require('../../db/models/product')

const ProductType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLNonNull(GraphQLInt) },
    inventory: { type: GraphQLNonNull(GraphQLInt) },
    image: { type: GraphQLString }
  })
})

const productResolver = () => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

module.exports = { ProductType, productResolver }
