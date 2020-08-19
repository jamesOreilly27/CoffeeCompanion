export const sumAll = (bidAreas, type) => {
  let total = 0;
  bidAreas.forEach(bidArea => {
    for(let i = 0; i < bidArea.products.length; i++) {
      total += bidArea.products[i][type] * bidArea.products[i].qty
    }
  })
  return total
}

export const findArea = (str, areas) => {
  return areas.filter(area => area.title === str)[0]
}

export const taxExemptTotal = (num, isExempt) => {
  if(isExempt) return 0.00
  else return num
}
