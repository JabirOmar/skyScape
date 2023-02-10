import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './scroll.css'

function Scroll() {

    window.addEventListener('scroll', () => {
        const scrollUp = document.getElementById('scroll-up')
        let scrolled = window.scrollY
        if(scrolled > 200 ) {
          scrollUp.classList.add('showIcon')
        }else if (scrolled < 200) {
          scrollUp.classList.remove('showIcon')
        }
      })

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

  return (
    <section id='scroll-container'>
      <div id='scroll-up' onClick={scrollUp}>
        <BsArrowUp id='up-arrow'/>
      </div>
    </section>
  )
}

export default Scroll
