const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { productResolver, productDetailResolver } = require('./product')
const { categoryResolver } = require('./category')
const { cartResolver } = require('./cart')
const { CategoryType, ProductType, ProductDetailType, CartType } = require('./ObjectTypes')
const { User } = require('../../db/models')

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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    loginUser: {
      type: GraphQLBoolean,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString), },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, { email, password }, request) => {
        User.findOne({ where: { email: email}})
        .then(user => {
          if(!user) {
            console.log('FIRING EMAIL')
          } else if(!user.correctPassword(password)) {
            console.log('FIRING PASSWORD')
          } else {
            request.login(user, error => error ? error : user)
            return true
          }
        })
        .catch(err => console.log(err))
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
