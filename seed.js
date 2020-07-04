const db = require('./server/db')
const chalk = require('chalk')
const { Product, Category, Review, ProductCategory, Cart, LineItem, Bid, BidArea, AreaProduct, User } = require('./server/db/models')

const markup = cost => cost * 1.3
const applyDiscount = cost => cost * .6

async function seed () {
  await db.sync({force: true})
  console.log(chalk.bgGreen.white.bold('db synced!'))

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
    Product.create({name: '8 PORT HD RECORDER', vendor: "AVIGILON", partNumber: "VMA-ENVR1-8P8-NA", description: 'Need to Add Specs', cost: applyDiscount(3085), price: markup(applyDiscount(3085)), image: '', featured: true }),
    Product.create({name: '4 PORT HD RECORDER', vendor: "AVIGILON", partNumber: "VMA-ENVR1-8P4-NA", description: 'Add Specs later', cost: applyDiscount(2665), price: markup(applyDiscount(2665)), image: '', featured: true }),
    Product.create({name: 'H5A BULLET CAMERA', vendor: "AVIGILON", partNumber: "2.0-H5A-BO1-IR", description: '2 MP', cost: applyDiscount(1000), price: markup(applyDiscount(1000)), image: '' }),
    Product.create({name: 'H5SL BULLET CAMERA', vendor: "AVIGILON", partNumber: "2.0C-H5SL-BO1-IR", description: '2 MP', cost: applyDiscount(520), price: markup(applyDiscount(520)), image: '', featured: true }),
    Product.create({name: '180 DEGREE MULTISENSOR', vendor: "AVIGILON", partNumber: "9C-H4A-3MH-180", description: '9MP', cost: applyDiscount(1655), price: markup(applyDiscount(1655)), image: '' }),
    Product.create({name: '270 DEGREE MULTISENSOR', vendor: "AVIGILON", partNumber: "9C-H4A-3MH-270", description: '9MP', cost: applyDiscount(1655), price: markup(applyDiscount(1655)), image: '' }),
    Product.create({name: '360 DEGREE MULTISENSOR', vendor: "AVIGILON", partNumber: "12C-H4A-4MH-360", description: 'the blend will make you want more', cost: applyDiscount(1905), price: markup(applyDiscount(1905)), image: '' }),
    Product.create({name: 'ANALYTICS PLUS', vendor: "DAHUA", partNumber: "N45EF63", description: '4MP', cost: 190, price: markup(190), image: '' }),
    Product.create({name: 'STARLIGHT VARI-FOCAL', vendor: "DAHUA", partNumber: "N45DB7Z", description: '4MP', cost: 290, price: markup(290), image: '' }),
    Product.create({name: 'AI NETWORK CAMERA', vendor: "DAHUA", partNumber: "HNC5I142T-ASEN2/36", description: '4MP', cost: 179, price: markup(179), image: '' }),
    Product.create({name: 'STARLIGHT BULLET NETWORK CAMERA', vendor: "DAHUA", partNumber: "HNC3V141T-IR-ZS-S2", description: 'Test', cost: 139, price: markup(139), image: '' }),
    Product.create({name: 'STARLIGHT FIXED TURRET CAMERA', vendor: "DAHUA", partNumber: "HNC3V341TM-IRAS-S2/28", description: '4MP', cost: 80, price: markup(80), image: '' }),
    Product.create({name: 'FIXED LENS IR MINI', vendor: "DAHUA", partNumber: "HNC3V241E-IR/36", description: '4MP, 2.8MM Lens', cost: 75, price: markup(75), image: '' }),
    Product.create({name: 'LIGHT AI IR FIXED BULLET CAMERA', vendor: "DAHUA", partNumber: "HNC3I141E-IRAS/28", description: '4MP', cost: 89, price: markup(89), image: '' }),
    Product.create({name: 'HD ANALOG CAMERA', vendor: "DH VISION", partNumber: "DH-IDF-480WN(ZA)-V3(2.8mm)", description: '2MP, 2.8MM Lens', cost: 19.50, price: markup(19.50), image: '' }),
    Product.create({name: 'HD ANALOG BULLET CAMERA', vendor: "DH VISION", partNumber: "DH-UBV7500W", description: '5MP', cost: 31.5, price: markup(31.5), image: '' }),
    Product.create({name: 'UNIVIEW TURRET DOME', vendor: "DH Vision", partNumber: "IPC3614SR3-DPF28M", description: '4MP', cost: 75, price: markup(75), image: '' }),
    Product.create({name: 'FIXED LENS UNIVIEW BULLET CAMERA', vendor: "DH VISION", partNumber: "IPC2124SR3-DPF36", description: '4MP', cost: 75, price: markup(75), image: '' }),
    Product.create({name: 'VARI-FOCAL UNIVIEW BULLET CAMERA', vendor: "DH VISION", partNumber: "IPC232EBR-DPZ28", description: '4MP', cost: 130, price: markup(130), image: '' }),
    Product.create({name: 'UNIVIEW 4K FIXED LENS BULLET CAMERA', vendor: "DH VISION", partNumber: "IPC2128SR3-DPF40", description: '4K', cost: 120, price: markup(120), image: '' }),
    Product.create({name: 'OUTDOOR PENDENT MOUNT ADAPTER', vendor: "AVIGILON", partNumber: "H4AMH-AD-PEND1", description: '', cost: 160, price: markup(160), image: '' }),
    Product.create({name: 'DOME AND BUBBLE COVER', vendor: "AVIGILON", partNumber: "H4AMH-DO-COVR1", description: '', cost: 160, price: markup(160), image: '' }),
    Product.create({name: 'PENDANT WALL MOUNT ADAPTER', vendor: "AVIGILON", partNumber: "IRPTZ-MNT-WALL1", description: '', cost: 95, price: markup(95), image: '' }),
    Product.create({name: 'PENDAN NPT MOUNT ADAPTER', vendor: "AVIGILON", partNumber: "IRPTZ-MNT-NPTA-1", description: '', cost: 55, price: markup(55), image: '' }),
    Product.create({name: 'OUTDOOR SURFACE MOUNT ADAPTER', vendor: "AVIGILON", partNumber: "H4AMH-AD-DOME1", description: '', cost: 160, price: markup(160), image: '' }),
    Product.create({name: 'IN CEILING ADAPTER', vendor: "AVIGILON", partNumber: "H4AMH-AD-CEIL1", description: '', cost: 150, price: markup(150), image: '' }),
    Product.create({name: 'JUNCTION BOX', vendor: "AVIGILON", partNumber: "H4-BO-JBOX1", description: '', cost: 90, price: markup(90), image: '' }),
    Product.create({name: 'JUNCTION BOX', vendor: "ADI", partNumber: "PFA121", description: '', cost: 17.99, price: markup(17.99), image: '' }),
    Product.create({name: 'CORNER MOUNT', vendor: "ENS", partNumber: "PFA151", description: '', cost: 20, price: markup(20), image: '' }),
    Product.create({name: '4 CHANNEL DVR', vendor: "DH VISION", partNumber: "PVR04H1-X", description: '', cost: 53, price: markup(53), image: '' }),
    Product.create({name: '8 CHANNEL DVR', vendor: "DH VISION", partNumber: "PVR08H1-X", description: '', cost: 77, price: markup(77), image: '' }),
    Product.create({name: '16 CHANNEL DVR', vendor: "DH VISION", partNumber: "PVR16H1-X", description: '', cost: 125, price: markup(125), image: '' }),
    Product.create({name: '32 CHANNEL DVR', vendor: "DH VISION", partNumber: "PVR32H2-X", description: '', cost: 270, price: markup(270), image: '' }),
    Product.create({name: 'UNIVIEW 8 CHANNEL NVR', vendor: "UNIVIEW", partNumber: "NVR301-08L-P8", description: '', cost: 93, price: markup(93), image: '' }),
    Product.create({name: 'UNIVIEW 16 CHANNEL NVR', vendor: "UNIVISION", partNumber: "NVR302-16E-P16-B", description: '', cost: 280, price: markup(280), image: '' })
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

  const productCategories = await Promise.all([
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

  const bids =  await Promise.all([
    Bid.create({ title: "Test One", status: "open", userId: 1 }),
    Bid.create({ title: "Test Two", status: "pending", userId: 1 }),
    Bid.create({ title: "Test Three", status: "pending", userId: 1 }),
    Bid.create({ title: "Test Four", status: "approved", userId: 1 }),
    Bid.create({ title: 'Test Five', status: "declined", userId: 1})
  ])

  const bidAreas = await Promise.all([
    BidArea.create({ title: "Back Parking", bidId: 1 }),
    BidArea.create({ title: "Front Parking", bidId: 1 }),
    BidArea.create({ title: "Front Gate", bidId: 1 }),
    BidArea.create({ title: "Side Fence", bidId: 1 }),
    BidArea.create({ title: "Car Lot", bidId: 1 }),
    BidArea.create({ title: "Shipping Dock", bidId: 1 }),
    BidArea.create({ title: "Back Parking", bidId: 2 }),
    BidArea.create({ title: "Front Parking", bidId: 2 }),
    BidArea.create({ title: "Front Gate", bidId: 2 }),
    BidArea.create({ title: "Car Lot", bidId: 2 }),
    BidArea.create({ title: "Shipping Dock", bidId: 2 }),
    BidArea.create({ title: "", bidId: 3 }),
    BidArea.create({ title: "", bidId: 3 }),
    BidArea.create({ title: "", bidId: 3 }),
    BidArea.create({ title: "", bidId: 3 }),
    BidArea.create({ title: "", bidId: 3 }),
    BidArea.create({ title: "", bidId: 4 }),
    BidArea.create({ title: "", bidId: 4 }),
    BidArea.create({ title: "", bidId: 4 }),
    BidArea.create({ title: "", bidId: 4 }),
    BidArea.create({ title: "", bidId: 4 }),
    BidArea.create({ title: "", bidId: 4 })
  ])

  // const areaProducts = await Promise.all([
  //   AreaProduct.create({ bidAreaId: 1, price: 15, cost: 10, productId: 3, qty: 4 }),
  //   AreaProduct.create({ bidAreaId: 1, price: 50, cost: 10, productId: 2, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 1, price: 35, cost: 10, productId: 1, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 1, price: 40, cost: 10, productId: 4, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 1, price: 55, cost: 10, productId: 10, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 1, price: 70, cost: 10, productId: 12, qty: 2 }),
  //   AreaProduct.create({ bidAreaId: 2, price: 15, cost: 10, productId: 3, qty: 4 }),
  //   AreaProduct.create({ bidAreaId: 3, price: 50, cost: 10, productId: 2, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 4, price: 35, cost: 10, productId: 1, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 5, price: 40, cost: 10, productId: 4, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 6, price: 55, cost: 10, productId: 10, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 7, price: 70, cost: 10, productId: 12, qty: 2 }),
  //   AreaProduct.create({ bidAreaId: 8, price: 70, cost: 10, productId: 3, qty: 4 }),
  //   AreaProduct.create({ bidAreaId: 9, price: 70, cost: 10, productId: 2, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 10, price: 70, cost: 10, productId: 1, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 11, price: 70, cost: 10, productId: 4, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 12, price: 55, cost: 10, productId: 10, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 13, price: 70, cost: 10, productId: 12, qty: 2 }),
  //   AreaProduct.create({ bidAreaId: 14, price: 15, cost: 10, productId: 3, qty: 4 }),
  //   AreaProduct.create({ bidAreaId: 15, price: 50, cost: 10, productId: 2, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 16, price: 35, cost: 10, productId: 1, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 17, price: 40, cost: 10, productId: 4, qty: 1 }),
  //   AreaProduct.create({ bidAreaId: 18, price: 55, cost: 10, productId: 10, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 19, price: 70, cost: 10, productId: 12, qty: 2 }),
  //   AreaProduct.create({ bidAreaId: 20, price: 15, cost: 10, productId: 3, qty: 4 }),
  //   AreaProduct.create({ bidAreaId: 21, price: 50, cost: 10, productId: 2, qty: 3 }),
  //   AreaProduct.create({ bidAreaId: 22, price: 50, cost: 10, productId: 2, qty: 3 })
  // ])

  const reviews = await Promise.all([
    Review.create({ content: "Delicious", rating: 4, productId: 1 }),
    Review.create({ content: "It's Great!", rating: 1, productId: 1 }),
    Review.create({ content: "I'm not a fan", rating: 2, productId: 2 }),
  ])
  console.log(`seeded ${users.length} users, ${items.length} items, ${reviews.length} reviews, ${products.length} products, ${productCategories.length} productCategories, ${carts.length} carts, ${bids.length} bids, ${bidAreas.length} bidAreas, and ${categories.length} categories`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log(chalk.bgBlue.white.bold('closing db connection'))
    db.close()
    console.log(chalk.bgRed.white.bold('db connection closed'))
  })

console.log('seeding...')
