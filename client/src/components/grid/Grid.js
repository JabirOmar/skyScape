import React from 'react'
import './grid.css'

function Grid() {
  return (
    <div>
      <div className='grid-container'>
        <div className='grid-item' id='item-1'>Item 1</div>
        <div className='grid-item' id='item-2'>Item 2</div>
        <div className='grid-item' id='item-3'>Item 3</div>
        <div className='grid-item' id='item-4'>Item 4</div>
        <div className='grid-item' id='item-5'>Item 5</div>
      </div>
    </div>
  )
}

export default Grid
