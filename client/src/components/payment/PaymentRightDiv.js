import React from 'react'
import ConfirmPayment from './ConfirmPayment'
import PaymentSummary from './PaymentSummary'

function PaymentRightDiv() {
  return (
    <div className='payment-right-div'>
      <h2>Payment And Confirmation</h2>
      <PaymentSummary />
      <ConfirmPayment />
    </div>
  )
}

export default PaymentRightDiv
