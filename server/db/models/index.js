const Product = require('./product')
const Category = require('./category')
const ProductCategory = require('./productCategory')
const Review = require('./review')
const Cart = require('./cart')
const LineItem = require('./lineitem')

/***** Associations ******/

//Product and Category

Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

//Product and Review
Product.hasMany(Review, { as: 'review' })

//Cart and Item
Cart.hasMany(LineItem, { as: 'item' })
LineItem.belongsTo(Cart)

//Product and Item
Product.hasMany(LineItem, { as: 'item' })
module.exports = {
  Product,
  Category,
  ProductCategory,
  Review,
  Cart,
  LineItem
}
