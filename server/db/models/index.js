const Product = require('./product')
const Category = require('./category')

/***** Associations ******/

//Product to Category
Category.belongsToMany(Product, { through: 'ProductCategories' })
Product.belongsToMany(Category, { through: 'ProductCategories' })

module.exports = {
  Product,
  Category
}
