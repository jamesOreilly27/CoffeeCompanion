const { GraphQLList, GraphQLString } = require('graphql')
const { CategoryType } = require('./ObjectTypes')
const { Category } = require('../../db/models')


//Resolvers
const categoryResolver = () => {
  return Category.findAll()
  .then(categories => categories)
  .catch(err => console.log(err))
}

const singleCategoryResolver = (parents, args) => {
  return Category.findOne({ where: { name: args.name } })
  .then(category => category)
  .catch(err => console.log(err))
}

//Fields
const categories = {
  type: new GraphQLList(CategoryType),
  description: 'List of all categories',
  resolve: categoryResolver
}

const singleCategory = {
  type: CategoryType,
  description: 'a single category',
  args: { name: { type: GraphQLString } },
  resolve: singleCategoryResolver
}

module.exports = { categories, singleCategory }
