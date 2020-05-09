const db = require('./server/db')
const chalk = require('chalk')
const { Product, Category } = require('./server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log(chalk.bgWhite.green.bold('db synced!'))

  // const users = await Promise.all([
  //   User.create({firstName: 'cody', lastName: 'greene', email: 'cody@email.com', password: '123', phone: '2123334343', isAdmin: true}),
  //   User.create({firstName: 'eddie', lastName: 'murphy', email: 'murphy@email.com', password: '123', phone: '2125555555'})
  // ])
  // const carts = await Promise.all([
  //   Cart.create({status: 'purchased', userId: 1}),
  //   Cart.create({status: 'purchased', userId: 1})
  // ])
  // const items = await Promise.all([
  //   Item.create({price: 500, quantity: 12}),
  //   Item.create({price: 600, quantity: 13}),
  //   Item.create({price: 700, quantity: 14}),
  //   Item.create({price: 800, quantity: 15}),
  //   Item.create({price: 900, quantity: 1}),
  //   Item.create({price: 10000, quantity: 44, cartId: 2}),
  //   Item.create({price: 900, quantity: 1, cartId: 1}),
  //   Item.create({price: 10000, quantity: 3, cartId: 1})
  // ])

  const products = await Promise.all([
    Product.create({name: 'Columbian Light Roast', description: 'so fresh', price: 50, inventory: 562, image: ''}),
    Product.create({name: 'Columbian Dark Roast', description: 'dark and toasty', price: 35, inventory: 250, image: ''})
  ])

  const categories = await Promise.all([
    Category.create({ name: 'columbian', description: 'the finest coffee from columbia' })
  ])

  // const reviews = await Promise.all([
  //   Review.create({content: "These Yeezy's are fire", rating: 4, productId: 1, userId: 1}),
  //   Review.create({content: "I Heard 'Em Say these were the best shoes on the market. They were right", rating: 5, productId: 1, userId: 2}),
  //   Review.create({content: 'Air Force One Shoes are as fly as it gets', rating: 4, productId: 2, userId: 1}),
  //   Review.create({content: "I like the Yeezy's better", rating: 3, productId: 2, userId: 2}),
  //   Review.create({content: 'Perfect for a night out on the... prowl, but super uncomfortable', rating: 3, productId: 3, userId: 1}),
  //   Review.create({content: 'Gucci Stilletos', rating: 2, productId: 3, userId: 2}),
  //   Review.create({content: 'Boots', rating: 1, productId: 4, userId: 1}),
  //   Review.create({content: 'Boots', rating: 4, productId: 4, userId: 2}),

  // ])
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
