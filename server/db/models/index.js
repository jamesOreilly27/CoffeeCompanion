const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const ProductCategory = require('./productCategory')
const Review = require('./review')
const Cart = require('./cart')
const LineItem = require('./lineitem')
const RawMaterial = require('./rawMaterial')

/***** Associations ******/

//Product and Category
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

//Product and RawMaterial
Product.hasMant(RawMaterial, { as: 'rawMaterials' })

//Product and Review
Product.hasMany(Review, { as: 'reviews' })

//Product and Item
LineItem.belongsTo(Product, { constraints: false })

//Cart and User
User.hasMany(Cart, { as: 'carts' })
Cart.belongsTo(User)

//Cart and Item
Cart.hasMany(LineItem, { as: 'items' })
LineItem.belongsTo(Cart)

module.exports = {
  Product,
  RawMaterial,
  Category,
  ProductCategory,
  Review,
  Cart,
  LineItem,
  User
}
