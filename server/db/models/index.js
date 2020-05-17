const User = require('./user')
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
Product.hasMany(Review, { as: 'reviews' })

//Cart and Item
Cart.hasMany(LineItem, { as: 'items' })
LineItem.belongsTo(Cart)

//Product and Item
LineItem.belongsTo(Product, { constraints: false })

//Cart and User
User.hasMany(Cart, { as: 'carts' })
Cart.belongsTo(User)

module.exports = {
  Product,
  Category,
  ProductCategory,
  Review,
  Cart,
  LineItem,
  User
}
