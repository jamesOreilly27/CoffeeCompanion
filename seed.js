const db = require('./server/db')
const chalk = require('chalk')
const { Product, Category, Review, ProductCategory, Cart, LineItem, User } = require('./server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log(chalk.bgWhite.green.bold('db synced!'))

  const users = await Promise.all([
    User.create({firstName: 'cody', lastName: 'greene', email: 'cody@email.com', password: '123', isAdmin: true}),
    User.create({firstName: 'eddie', lastName: 'murphy', email: 'murphy@email.com', password: '123', phone: '2125555555'})
  ])
  
  const carts = await Promise.all([
    Cart.create({status: 'open', userId: 2 }),
    Cart.create({status: 'purchased', userId: 2 }),
    Cart.create({status: 'purchased', userId: 1 }),
    Cart.create({status: 'open', userId: 1 }),
    Cart.create({status: 'purchased', userId: 2 }),
    Cart.create({status: 'purchased', userId: 2 })
  ])
  const items = await Promise.all([
    LineItem.create({ price: 500, quantity: 1, cartId: 1, productId: 1 }),
    LineItem.create({price: 600, quantity: 1, cartId: 1, productId: 2  }),
    LineItem.create({price: 700, quantity: 1, cartId: 1, productId: 3  }),
    LineItem.create({price: 800, quantity: 1, cartId: 2, productId: 1  }),
    LineItem.create({price: 900, quantity: 1, cartId: 2, productId: 2  }),
    LineItem.create({price: 100, quantity: 1, cartId: 2, productId: 3 }),
    LineItem.create({price: 900, quantity: 1, cartId: 1, productId: 4 }),
    LineItem.create({price: 100, quantity: 1, cartId: 1, productId: 5 })
  ])

  const products = await Promise.all([
    Product.create({name: 'LIGHT ROAST', description: 'so fresh', price: 50, image: '', featured: true }),
    Product.create({name: 'DARK ROAST', description: 'dark and toasty', price: 35, image: '', featured: true }),
    Product.create({name: 'DONUT SHOP', description: 'American Classic', price: 15, image: '' }),
    Product.create({name: 'CARAMEL', description: 'sweet goodness', price: 40, image: '', featured: true }),
    Product.create({name: 'VANILLA', description: 'this vanilla isnt boring', price: 70, image: '' }),
    Product.create({name: 'ICED COFFEE', description: 'for the cold lovers', price: 95, image: '' }),
    Product.create({name: 'MASTER BLEND', description: 'the blend will make you want more', price: 40, image: '' }),
    Product.create({name: 'HOUSE BLEND', description: 'for around the hosue', price: 35, image: '' }),
    Product.create({name: 'TEST ONE', description: 'Test', price: 25, image: '' }),
    Product.create({name: 'TEST TWO', description: 'Test', price: 55, image: '' }),
    Product.create({name: 'TEST THREE', description: 'Test', price: 10, image: '' }),
    Product.create({name: 'TEST FOUR', description: 'Test', price: 8, image: '' }),
    Product.create({name: 'TEST FIVE', description: 'Test', price: 13, image: '' }),
    Product.create({name: 'TEST SIX', description: 'Test', price: 25, image: '' }),
    Product.create({name: 'TEST SEVEN', description: 'Test', price: 50, image: '' }),
    Product.create({name: 'TEST EIGHT', description: 'Test', price: 34, image: '' }),
    Product.create({name: 'TEST NINE', description: 'Test', price: 12, image: '' }),
    Product.create({name: 'TEST TEN', description: 'Test', price: 65, image: '' }),
    Product.create({name: 'TEST ELEVEN', description: 'Test', price: 89, image: '' }),
    Product.create({name: 'TEST TWELVE', description: 'Test', price: 99, image: '' }),
    Product.create({name: 'TEST THIRTEEN', description: 'Test', price: 109, image: '' })
  ])

  const categories = await Promise.all([
    Category.create({ name: 'COLUMBIAN', description: 'the finest coffee from columbia', featured: true }),
    Category.create({ name: 'TEST ONE', description: 'the first test' }),
    Category.create({ name: 'TEST TWO', description: 'the second test' }),
    Category.create({ name: 'TEST THREE', description: 'the third test', featured: true }),
    Category.create({ name: 'TEST FOUR', description: 'the fourth test' }),
    Category.create({ name: 'TEST FIVE', description: 'the fifth test' }),
    Category.create({ name: 'TEST SIX', description: 'the sixth test' }),
    Category.create({ name: 'TEST SEVEN', description: 'the seventh test' }),
    Category.create({ name: 'TEST EIGHT', description: 'the eighth test' }),
    Category.create({ name: 'TEST NINE', description: 'the nineth test' })
  ])

  const ProductCategories = await Promise.all([
    ProductCategory.create({ categoryId: 1, productId: 1 }),
    ProductCategory.create({ categoryId: 2, productId: 2 }),
    ProductCategory.create({ categoryId: 3, productId: 3 }),
    ProductCategory.create({ categoryId: 4, productId: 4 }),
    ProductCategory.create({ categoryId: 5, productId: 5 }),
    ProductCategory.create({ categoryId: 6, productId: 6 }),
    ProductCategory.create({ categoryId: 7, productId: 7 }),
    ProductCategory.create({ categoryId: 8, productId: 8 }),
    ProductCategory.create({ categoryId: 9, productId: 9 }),
    ProductCategory.create({ categoryId: 1, productId: 10 }),
    ProductCategory.create({ categoryId: 2, productId: 11 }),
    ProductCategory.create({ categoryId: 3, productId: 12 }),
    ProductCategory.create({ categoryId: 4, productId: 13 }),
    ProductCategory.create({ categoryId: 5, productId: 14 }),
    ProductCategory.create({ categoryId: 6, productId: 15 }),
    ProductCategory.create({ categoryId: 7, productId: 16 }),
    ProductCategory.create({ categoryId: 8, productId: 17 }),
    ProductCategory.create({ categoryId: 9, productId: 18 }),
    ProductCategory.create({ categoryId: 1, productId: 19 }),
    ProductCategory.create({ categoryId: 2, productId: 20 }),
    ProductCategory.create({ categoryId: 3, productId: 21 })
  ])

  const reviews = await Promise.all([
    Review.create({ content: "Delicious", rating: 4, productId: 1 }),
    Review.create({ content: "It's Great!", rating: 1, productId: 1 }),
    Review.create({ content: "I'm not a fan", rating: 2, productId: 2 }),
  ])
  console.log(`seeded ${users.length} users, ${items.length} items, ${reviews.length} reviews, ${products.length} products, and ${categories.length} categories`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log(chalk.bgWhite.blue.bold('closing db connection'))
    db.close()
    console.log(chalk.bgWhite.red.bold('db connection closed'))
  })

console.log('seeding...')
