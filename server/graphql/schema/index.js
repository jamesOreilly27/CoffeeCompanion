const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { productResolver, productDetailResolver } = require('./product')
const { categoryResolver, singleCategoryResolver } = require('./category')
const { cartResolver } = require('./cart')
const { userResolver } = require('./user')
const { chooseAuthType } = require('./helpers')
const { CategoryType, ProductType, ProductDetailType, CartType, UserType } = require('./ObjectTypes')
const { User } = require('../../db/models')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    currentUser: {
      type: UserType,
      description: 'The current logged in user',
      resolve: userResolver
    },
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
      args: { id: { type: GraphQLInt }},
      resolve: productDetailResolver
    },
    singleCategory: {
      type: CategoryType,
      description: 'a single category',
      args: { name: { type: GraphQLString } },
      resolve: singleCategoryResolver
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
        password: { type: new GraphQLNonNull(GraphQLString) },
        isSignup: { type: GraphQLBoolean },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve: (parent, { email, password, isSignup, firstName, lastName }, request) => {
        return chooseAuthType(email, password, isSignup, firstName, lastName, User, request)
      }
    },
    logout: {
      type: GraphQLBoolean,
      resolve: (parent, args, request) => {
        request.logout()
        return true
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

module.exports = schema
