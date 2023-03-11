import React from 'react'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'

function ServiceLeftDiv() {
  return (
    <div className='service-left-section'>
      <h2>Our Service</h2>
      <div className='service-cards-container'>

        <div className='service-card'>
          <div className='service-card-top'><VscDebugBreakpointLogUnverified />
          <span>Fast and easy booking</span></div>
          <p>in just few click you can book a flight</p>
        </div>
        <div className='service-card'>
          <div className='service-card-top'><VscDebugBreakpointLogUnverified />
          <span>Secure booking</span></div>
          <p>We offer our clients a highly secure environment</p>
        </div>
        <div className='service-card'>
          <div className='service-card-top'><VscDebugBreakpointLogUnverified />
          <span>Flexible booking</span></div>
          <p>get 24/7 assistance from our employies</p>
        </div>
        <div className='service-card'>
          <div className='service-card-top'><VscDebugBreakpointLogUnverified />
          <span>World wide travel</span></div>
          <p>travel to every country in the world with ease</p>
        </div>

      </div>
    </div>
  )
}

export default ServiceLeftDiv
