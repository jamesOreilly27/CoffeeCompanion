const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const ProductCategory = require('./productCategory')
const Review = require('./review')
const Cart = require('./cart')
const LineItem = require('./lineitem')
const RawMaterial = require('./rawMaterial')
const Bid = require('./bid')
const BidArea = require('./bidArea')
const AreaProduct = require('./areaProduct')

/***** Associations ******/

//Product and Category
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

//Product and RawMaterial
Product.belongsToMany(RawMaterial, { through: 'kit-pieces' })
RawMaterial.belongsToMany(Product, { through: 'kit-pieces' })

//Product and Review
Product.hasMany(Review, { as: 'reviews' })

//Product and Item
LineItem.belongsTo(Product, { constraints: false })

//Bid and BidArea
Bid.hasMany(BidArea, { as: 'bidareas', constraints: false })

//BidArea and Product
AreaProduct.belongsTo(Product, { constraints: false })
BidArea.hasMany(AreaProduct, { as: 'products' })

//Bid and User
User.hasMany(Bid)

//Cart and User
User.hasMany(Cart, { as: 'carts' })
Cart.belongsTo(User)

//Cart and Item
Cart.hasMany(LineItem, { as: 'items' })
LineItem.belongsTo(Cart)

module.exports = {
  Product,
  Bid,
  BidArea,
  AreaProduct,
  Category,
  ProductCategory,
  Review,
  Cart,
  LineItem,
  User,
  RawMaterial
}
