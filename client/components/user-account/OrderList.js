import React from 'react'
import { ActiveCart } from '../user-account'

const OrderList = ({ orders, activeCart }) => {
  return (
    <div>
      {activeCart && <ActiveCart activeCart={activeCart} />}
    </div>
  )
}

export default OrderList
