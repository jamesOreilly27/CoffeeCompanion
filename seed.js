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
    Cart.create({status: 'purchased' }),
    Cart.create({status: 'purchased' })
  ])
  const items = await Promise.all([
    LineItem.create({ price: 500, quantity: 12, cartId: 1, productId: 1 }),
    LineItem.create({price: 600, quantity: 13, cartId: 1, productId: 1  }),
    LineItem.create({price: 700, quantity: 14, cartId: 1, productId: 1  }),
    LineItem.create({price: 800, quantity: 15, cartId: 2, productId: 1  }),
    LineItem.create({price: 900, quantity: 1, cartId: 2, productId: 1  }),
    LineItem.create({price: 10000, quantity: 44, cartId: 2, productId: 1 }),
    LineItem.create({price: 900, quantity: 1, cartId: 1, productId: 1 }),
    LineItem.create({price: 10000, quantity: 3, cartId: 1, productId: 1 })
  ])

  const products = await Promise.all([
    Product.create({name: 'Columbian Light Roast', description: 'so fresh', price: 50, inventory: 562, image: '' }),
    Product.create({name: 'Columbian Dark Roast', description: 'dark and toasty', price: 35, inventory: 250, image: '' })
  ])

  const categories = await Promise.all([
    Category.create({ name: 'columbian', description: 'the finest coffee from columbia' })
  ])

  const ProductCategories = await Promise.all([
    ProductCategory.create({ categoryId: 1, productId: 1 }),
    ProductCategory.create({ categoryId: 1, productId: 2 })
  ])

  const reviews = await Promise.all([
    Review.create({ content: "Delicious", rating: 4, productId: 1 }),
    Review.create({ content: "It's Great!", rating: 5, productId: 1 }),
    Review.create({ content: "I'm not a fan", rating: 2, productId: 2 }),
  ])
//   console.log(`seeded ${users.length} users, ${items.length} items, ${reviews.length} reviews, ${products.length} products, and ${categories.length} categories`)
//   console.log(`seeded successfully`)
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
