const Product = require('./product')
const Category = require('./category')
const ProductCategory = require('./productCategory')

/***** Associations ******/

//Product to Category
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

module.exports = {
  Product,
  Category,
  ProductCategory
}
