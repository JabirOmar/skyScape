import React from 'react'
import PaymentLeftDiv from './PaymentLeftDiv'
import PaymentRightDiv from './PaymentRightDiv'
import './payment.css'

function Payment() {
  return (
    <section className='payment-section'>
      <PaymentLeftDiv />
      <PaymentRightDiv />
    </section>
  )
}

export default Payment
