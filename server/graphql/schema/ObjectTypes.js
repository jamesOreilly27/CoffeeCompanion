const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')

const ProductType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLNonNull(GraphQLInt) },
    inventory: { type: GraphQLNonNull(GraphQLInt) },
    image: { type: GraphQLString },
    categories: {
      type: new GraphQLList(CategoryType),
      description: 'category products',
      resolve: product => {
        return product.getCategories()
        .then(categories => categories)
        .catch(err => console.log(err))
      }
    }
  })
})

const ProductDetailType = new GraphQLObjectType({
  name: 'ProductDetail',
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLNonNull(GraphQLInt) },
    inventory: { type: GraphQLNonNull(GraphQLInt) },
    image: { type: GraphQLString },
    reviews: {
      type: new GraphQLList(ReviewType),
      description: 'a list of reviews for this product',
      args: { id: { type: GraphQLInt }},
      resolve: product => {
        return product.getReview()
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

const CategoryType = new GraphQLObjectType({
  name: 'category',
  description: 'Different groupings of products',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
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

const LineItemType = new GraphQLObjectType({
  name: 'lineitem',
  description: 'a line item from a cart',
  fields: () => ({
    price: { type: GraphQLNonNull(GraphQLInt) },
    quantity: { type: GraphQLNonNull(GraphQLInt) },
    product: {
      type: ProductDetailType,
      description: 'line item product details',
      resolve: lineItem => {
        return lineItem.getProduct()
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
    status: { type: GraphQLNonNull(GraphQLString) },
    lineitem: {
      type: LineItemType,
      description: 'line item on a cart',
      resolve: cart => {
        return cart.getLineItem()
        .then(lineitem => lineitem)
        .catch(err => console.log(err))
      }
    }
  })
})

module.exports = {
  CategoryType,
  ProductType,
  ProductDetailType,
  ReviewType,
  CartType,
  LineItemType
}
