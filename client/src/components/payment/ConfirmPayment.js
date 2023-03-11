import React from 'react'

function ConfirmPayment() {
  return (
    <div className='confirm-payment'>
        <div id='payment-methods'>
            <div className='card-display' id='visa'></div>
            <div className='card-display' id='master'></div>
            <div className='card-display' id='paypal'></div>
            <div className='card-display' id='shabelle'></div>
            <div className='card-display' id='commercial'></div>
        </div>
        <div id='payment-area'>
            <form className='confirmation-wrapper'>
                 <label>Enter Confirmation Code</label>
                 <input type='text' />
                 <button type='button'>Confirm</button>
            </form>
        </div>
    </div>
  )
}

export default ConfirmPayment
