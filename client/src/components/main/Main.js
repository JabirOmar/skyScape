import React from 'react'
import NavBar from '../navbar/NavBar'
import Landing from '../landing/Landing'
import Explore from '../explore/Explore'
import Service from '../service/Service'
import About from '../about/About'
import Contact from '../contact/Contact'
import MiniBook from '../miniBook/MiniBook';

function Main() {
  return (
    <div className='App'>
       <NavBar />
      <div className='small-container'>
        <Landing />
        <MiniBook />
      </div>
      <Explore />
      <Service />
      <About />
      <Contact />
    </div>
  )
}

export default Main
