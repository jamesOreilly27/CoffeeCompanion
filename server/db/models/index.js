const Product = require('./product')
const Category = require('./category')
const ProductCategory = require('./productCategory')
const Review = require('./review')
const Cart = require('./cart')
const Item = require('./item')

/***** Associations ******/

//Product and Category

Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

//Product and Review
Product.hasMany(Review, { as: 'review' })

//Cart and Item
Cart.hasMany(Item, { as: 'item' })
Item.belongsTo(Cart)

module.exports = {
  Product,
  Category,
  ProductCategory,
  Review,
  Cart,
  Item
}
