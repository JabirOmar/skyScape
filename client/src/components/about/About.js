import React from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './about.css'

function About() {

  return (
    <section className='about-section'>

        <div className='left-about'>
          <div id='left-about-img'></div>
        </div>

        <div className='right-about'>
          <div id='right-content-container'>
          <div id='about-us-title-container'>
            <span id='header-line'></span>
            <span id='about-us-title'>About Us</span>
            <span id='header-line'></span>
          </div>

          <div id='about-us-sentences'>
            <p>
            Comfort Flight Booking is a leading travel agency dedicated to providing our customers with top-notch service and the best deals on flights, hotels, and vacation packages.
            </p><br/>
            <p>Comfort Flight Booking is dedicated to providing travelers with a seamless and luxury booking experience</p>
            <br></br>
            <p>
          With a team of experienced travel professionals, we make planning your next trip easy and stress-free
          </p>
          </div>
          </div>
        </div>
        
    </section>
  )
}

export default About
