import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function PriceRightDiv() {

    const navigate = useNavigate()

    setTimeout(() => {
        let classDiv = document.querySelectorAll('.class-div')
        classDiv.forEach(div => {
            div.addEventListener('click', ()=>{
                console.log(div.innerText)
                navigate('/booking')
            })
        })
    }, 500);

  return (
    <div className='price-right-div'>
      <div id='pricing-right-top'>
        <p>Select your departure flight<br/> from <span>Kabul</span> to <span>Kandahar</span></p>
      </div>
      <div id='pricing-right-middle'>
        <div id='flight-card-container'>

            <div className='flight-card-wrapper'>
               <div className='flight-card-left'>
                <div className='time-div'>
                    <span className='flight-day'>05</span>
                    <span className='flight-month'>MAR</span>
                    <span className='flight-time'>5:00AM</span>
                </div>
                <BsArrowRight />
                <div className='time-div'>
                    <span className='landing-day'>05</span>
                    <span className='landing-month'>MAR</span>
                    <span className='landing-time'>6:00Am</span>
                </div>
               </div>
               <span className='plane'>Comfort</span>
               <div className='flight-card-right'>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Economy</p>
                      <div className='class-div'>
                          <span>4,000 Birr</span>
                      </div>
                   </div>
                </div>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Business</p>
                      <div className='class-div'>
                          <span>5,500 Birr</span>
                      </div>
                   </div>
                </div>
               </div>
            </div>

            <div className='flight-card-wrapper'>
               <div className='flight-card-left'>
                <div className='time-div'>
                    <span className='flight-day'>05</span>
                    <span className='flight-month'>MAR</span>
                    <span className='flight-time'>9:00AM</span>
                </div>
                <BsArrowRight />
                <div className='time-div'>
                    <span className='landing-day'>05</span>
                    <span className='landing-month'>MAR</span>
                    <span className='landing-time'>10:00AM</span>
                </div>
               </div>
               <span className='plane'>Comfort</span>
               <div className='flight-card-right'>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Economy</p>
                      <div className='class-div'>
                          <span>4,500 Birr</span>
                      </div>
                   </div>
                </div>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Business</p>
                      <div className='class-div'>
                          <span>6,000 Birr</span>
                      </div>
                   </div>
                </div>
               </div>
            </div>

            <div className='flight-card-wrapper'>
               <div className='flight-card-left'>
                <div className='time-div'>
                    <span className='flight-day'>05</span>
                    <span className='flight-month'>MAR</span>
                    <span className='flight-time'>4:00PM</span>
                </div>
                <BsArrowRight />
                <div className='time-div'>
                    <span className='landing-day'>05</span>
                    <span className='landing-month'>MAR</span>
                    <span className='landing-time'>5:00PM</span>
                </div>
               </div>
               <span className='plane'>Comfort</span>
               <div className='flight-card-right'>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Economy</p>
                      <div className='class-div'>
                          <span>4,500 Birr</span>
                      </div>
                   </div>
                </div>
                <div className='price-and-class-wrapper'>
                   <div className='class-div-wrapper'>
                      <p>Business</p>
                      <div className='class-div'>
                          <span>6,000 Birr</span>
                      </div>
                   </div>
                </div>
               </div>
            </div>


        </div>
      </div>
      <div id='pricing-right-bottom'>
        <p>Fly with <span>SkyScape</span> For a Comfortable flight</p>
      </div>
    </div>
  )
}

export default PriceRightDiv
