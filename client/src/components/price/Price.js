import React from 'react'
import './price.css'
import PriceLeftDiv from './PriceLeftDiv'
import PriceRightDiv from './PriceRightDiv'

function Price() {
  return (
    <section className='price-section'>
      <PriceLeftDiv/>
      <PriceRightDiv />
    </section>
  )
}

export default Price
