const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLBoolean, GraphQLFloat } = require('graphql')
const { Product } = require('../../db/models')

/********** User Related ObjectTypes **********/
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'logged in user',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    activeCart: {
      type: CartType,
      description: 'Users Active Cart',
      resolve: user => {
        return user.getCarts()
          .then(carts => carts.filter(cart => cart.status === 'open')[0])
          .catch(err => console.log(err))
      }
    },
    orders: {
      type: new GraphQLList(CartType),
      description: 'list of a users placed orders',
      resolve: user => {
        return user.getCarts()
          .then(carts => carts.filter(cart => cart.status !== 'open'))
          .catch(err => console.log(err))
      }
    }
  })
})

/********** Product Related ObjectTypes **********/
const ProductType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    partNumber: { type: GraphQLString },
    description: { type: GraphQLString },
    cost: { type: GraphQLNonNull(GraphQLFloat) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    image: { type: GraphQLString },
    featured: { type: GraphQLBoolean },
  })
})

const ProductDetailType = new GraphQLObjectType({
  name: 'ProductDetail',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLNonNull(GraphQLString) },
    partNumber: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    cost: { type: GraphQLNonNull(GraphQLFloat) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    image: { type: GraphQLNonNull(GraphQLString) },
    featured: { type: GraphQLBoolean },
    reviews: {
      type: new GraphQLList(ReviewType),
      description: 'a list of reviews for this product',
      args: { name: { type: GraphQLString } },
      resolve: product => {
        return product.getReviews()
          .then(reviews => reviews)
          .catch(err => console.log(err))
      }
    }
  })
})

const ReviewType = new GraphQLObjectType({
  name: 'review',
  description: 'a review of a specific product',
  fields: () => ({
    content: { type: GraphQLNonNull(GraphQLString) },
    rating: { type: GraphQLNonNull(GraphQLInt) }
  })
})

/********** Category Related ObjectTypes ***********/
const CategoryType = new GraphQLObjectType({
  name: 'category',
  description: 'Different groupings of products',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    featured: { type: GraphQLBoolean },
    products: {
      type: new GraphQLList(ProductType),
      description: 'category products',
      resolve: category => {
        return category.getProducts()
          .then(products => products)
          .catch(err => console.log(err))
      }
    }
  })
})

/********** Cart Related ObjectTypes ***********/
const LineItemType = new GraphQLObjectType({
  name: 'lineitem',
  description: 'a line item from a cart',
  fields: () => ({
    id: { type: GraphQLInt },
    price: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    product: {
      type: ProductDetailType,
      description: 'line item product details',
      resolve: lineitem => {
        return lineitem.getProduct()
          .then(product => product)
          .catch(err => console.log(err))
      }
    }
  })
})

const CartType = new GraphQLObjectType({
  name: 'cart',
  description: 'a cart of items',
  fields: () => ({
    id: { type: GraphQLInt },
    updatedAt: { type: GraphQLString },
    status: { type: GraphQLString },
    lineitems: {
      type: new GraphQLList(LineItemType),
      description: 'line item on a cart',
      resolve: cart => {
        return cart.getItems()
          .then(lineitem => lineitem)
          .catch(err => console.log(err))
      }
    }
  })
})

/********** Bid Related Object Types ***********/

const BidType = new GraphQLObjectType({
  name: 'bid',
  description: 'A quote to be sent to a customer',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    bidAreas: {
      type: new GraphQLList(BidAreaType),
      description: 'An area in a bid',
      resolve: bid => {
        return bid.getBidareas()
          .then(area => area)
          .catch(err => console.log(err))
      }
    }
  })
})

const BidDetailType = new GraphQLObjectType({
  name: 'bidDetail',
  description: 'A single bid with details',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    bidAreas: {
      type: new GraphQLList(BidAreaType),
      description: 'An area in a bid',
      resolve: bid => {
        return bid.getBidareas()
          .then(area => area)
          .catch(err => console.log(err))
      }
    }
  })
})

const BidAreaType = new GraphQLObjectType({
  name: 'bidAreas',
  description: 'An area attached to a bid',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    products: {
      type: new GraphQLList(AreaProductType),
      resolve: bidArea => {
        return bidArea.getProducts()
        .then(products => products)
        .catch(err => console.log(err))
      }
    }
  })
})

const AreaProductType = new GraphQLObjectType({
  name: 'areaProduct',
  description: 'a product attached to bid area',
  fields: () => ({
    id: { type: GraphQLInt },
    qty: { type: GraphQLInt },
    cost: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    bidAreaId: { type: GraphQLInt },
    product: {
      type: ProductDetailType,
      resolve: areaProduct => {
        return Product.findByPk(areaProduct.productId)
        .then(product => product)
        .catch(err => console.log(err))
      }
    }
  })
})

/********** Customer Object Types **********/

const CustomerType = new GraphQLObjectType({
  name: "customer",
  description: "A Customer",
  fields: () => ({
    id: { type: GraphQLInt },
    companyName: { type: GraphQLString },
    industry: { type: GraphQLString },
    address: { type: GraphQLString },
    town: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    relayPort: { type: GraphQLString },
    relayId: { type: GraphQLString },
    localPolicePhone: { type: GraphQLString },
    email: { type: GraphQLString },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve: customer => {
        return customer.getContacts()
        .then(contacts => contacts)
        .catch(err => console.log(err))
      }
    }
  })
})

const ContactType = new GraphQLObjectType({
  name: "contact",
  description: "A Contact",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    passcode: { type: GraphQLString },
    email: { type: GraphQLString },
    primary: { type: GraphQLBoolean }
  })
})

module.exports = {
  UserType,
  CategoryType,
  ProductType,
  ProductDetailType,
  ReviewType,
  CartType,
  LineItemType,
  BidType,
  BidDetailType,
  BidAreaType,
  AreaProductType,
  CustomerType,
  ContactType
}
