export const sumAll = (bidAreas, type) => {
  let total = 0;
  bidAreas.forEach(bidArea => {
    for(let i = 0; i < bidArea.products.length; i++) {
      total += bidArea.products[i][type]
    }
  })
  return total
}
