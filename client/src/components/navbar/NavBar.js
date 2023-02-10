import React from 'react'
// import Explore from '../explore/Explore'
import './navbar.css'

function NavBar() {

    const navLinks = document.querySelectorAll('.nav-link')

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav')
        let scrolled = window.scrollY
        if (scrolled > 150 ) {
            nav.classList.add('showAgain')
        }else {
            nav.classList.remove('showAgain')
        }
    })

    navLinks.forEach(button => {
        button.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'))
            this.classList.add('active')
        })
    })

    const menu = () => {
        const menuBar = document.getElementById('menu')
        const links = document.querySelector('.middle-nav')
        menuBar.classList.toggle('clicked')
        links.classList.toggle('show')
    }

    const middleLinks = () => {
        const menuBar = document.getElementById('menu')
        const links = document.querySelector('.middle-nav')
        menuBar.classList.remove('clicked')
        links.classList.remove('show')
    }

    const home = () => {
        const landingPage = document.querySelector('.landing-section')
        landingPage.scrollIntoView({block: 'start'})
    }

    const about = () => {
        const aboutPage = document.querySelector('.about-section')
        aboutPage.scrollIntoView({block: 'start'})
    }

    const explore = () => {
        const explorePage = document.querySelector('.explore-section')
        explorePage.scrollIntoView({block: 'start'})
    }

    const service = () => {
        const servicePage = document.querySelector('.service-section')
        servicePage.scrollIntoView({block: 'start'})
    }

    const contact = () => {
        const contactPage = document.querySelector('.contact-section')
        contactPage.scrollIntoView({block: 'start'})
    }

    const bookNow = () => {
        // let booking = document.querySelector('.booking-section')
        // booking.classList.add('display')
    }

  return (
    <nav>

        {/* ===== Left NavBar ==== */}
        <div className='left-nav'>
          <span>SkyScape</span>
        </div>
    
        {/* ===== Middle NavBar ==== */}
        <div className='middle-nav'>
           <ul>
              <li className='nav-link active' onClick={ () => { middleLinks(); home() }}>Home</li>
              <li className='nav-link' onClick={ () => { middleLinks(); explore() }}>Explore</li>
              <li className='nav-link' onClick={ () => { middleLinks(); service() }}>Service</li>
              <li className='nav-link' onClick={ () => { middleLinks(); about() }}>About</li>
              <li className='nav-link' onClick={ () => { middleLinks(); contact() }}>Contact</li>
           </ul>
        </div>
    
        {/* ===== Right NavBar ==== */}
        <div className='right-nav'>
           <button onClick={bookNow}>Book Now</button>
           <div id='menu' onClick={menu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
           </div>
        </div>
      
    </nav>
  )
}

export default NavBar
