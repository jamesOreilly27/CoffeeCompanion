import React from 'react'
import { ActiveCart } from '../user-account'

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders && orders.map(order => {
        if(order.status === 'open') return <ActiveCart order={order} />
      })}
    </div>
  )
}

export default OrderList
