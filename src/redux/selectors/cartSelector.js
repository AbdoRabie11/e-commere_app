export function totalSelector(items) {

  const total = items.reduce((acc, item) => {
    return acc + getActualPrice(item.price, item.discount)
  }, 0)

  return total
}