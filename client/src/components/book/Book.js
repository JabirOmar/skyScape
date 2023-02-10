import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Grid from '../grid/Grid'
import './book.css'

function Book() {

  // let showAdults = document.getElementById('adult-numbers').innerText
  // let showChild = document.getElementById('adult-numbers').innerText
  // let showInfant = document.getElementById('adult-numbers').innerText

  // let currentPassengers = showAdults + showChild + showInfant

  let adultValue = 1
  let childValue = 0
  let infantValue = 0
  // Adults
  const decreaseAdult = () => {
    let adultsNumber = document.getElementById('adult-numbers')
    if(adultValue === 1){
      adultValue = 1
    }else {
      adultValue--
    }
    adultsNumber.innerText = adultValue
    handlePassengers()
  }

  const increaseAdult = () => {
    let adultsNumber = document.getElementById('adult-numbers')
    if(adultValue < 5){
      adultValue++
    }else if(adultValue > 5) {
      adultValue = 5
    }
    adultsNumber.innerText = adultValue
    handlePassengers()
  }

  const decreaseChild = () => {
    if(childValue === 0){
      childValue = 0
    }else{
      childValue--
    }
    document.getElementById('child-value').innerText = childValue
    handlePassengers()
  }

  const increaseChild = () => {
    if(childValue < 5){
      childValue++
    }else if(childValue > 5){
      childValue = 5
    }
    document.getElementById('child-value').innerText = childValue
    handlePassengers()
  }

  const decreaseInfant = () => {
    if(infantValue === 0){
      infantValue = 0
    }else{
      infantValue--
    }
    document.getElementById('infant-value').innerText = infantValue
    handlePassengers()
  }

  const increaseInfant = () => {
    if(infantValue === 3){
      infantValue = 3
    }else{
      infantValue++
    }
    document.getElementById('infant-value').innerText = infantValue
    handlePassengers()
  }

  const handlePassengers = () => {
    let totalPassengers = adultValue + childValue + infantValue
    document.getElementById('personel-pre-display').innerText = totalPassengers + ' Passenger, Economy'
  }

  const handlePersonel = (e) => {
    e.preventDefault();
    document.querySelector('.booking-Personel').classList.add('hide')
    document.querySelector('.fill-forms').classList.add('show')
  }

  return (
    <section className='booking-section'>
      <div className='booking-Personel'>

       <div className='booking-Personel-left'>
        <div id='personel-left-contents'>
          <h1>SkyScape Flight Booking.</h1>
          <ul>
            <li> <VscDebugBreakpointLogUnverified className='pointer'/>One Adult At Minimum.</li>
            <li> <VscDebugBreakpointLogUnverified className='pointer'/>Seven Passengers And Three Infants At Most.</li>
            <li> <VscDebugBreakpointLogUnverified className='pointer'/>Every Child Has 20% Of Discount.</li>
            <li> <VscDebugBreakpointLogUnverified className='pointer'/>Infants Can Get A Free Ticket.</li>
          </ul>
        </div>
       </div>


       <div className='booking-Personel-right'>
        <span id='personel-pre-display'>1 Passenger, Economy</span>

        <form className='passengers-number-container'>
          <span className='passengers-number-title-span'>Passengers</span>

          <div className='couter-countainer' id='adult-passengers-couter'>
            <span>Adults (12+ years)</span>
            <div className='counter'>
              <div className='couter-box' id='adult-decrease' onClick={decreaseAdult}>-</div>
                <div className='couter-box' >
                  <span id='adult-numbers'>1</span>
                </div>
              <div className='couter-box' id='adult-increase' onClick={increaseAdult}>+</div>
            </div>
          </div>

          <div className='couter-countainer' id='child-passengers-couter'>
            <span>Child (2-11 years)</span>
            <div className='counter'>
              <div className='couter-box' id='child-decrease' onClick={decreaseChild}>-</div>
              <div className='couter-box' id='child-numbers'>
                <span id='child-value'>0</span>
              </div>
              <div className='couter-box' id='child-increase' onClick={increaseChild}>+</div>
            </div>
          </div>

          <div className='couter-countainer' id='child-passengers-couter'>
            <span>Infants (Under 2 years)</span>
            <div className='counter'>
              <div className='couter-box' id='infant-decrease' onClick={decreaseInfant}>-</div>
              <div className='couter-box' id='infant-numbers'>
                <span id='infant-value'>0</span>
              </div>
              <div className='couter-box' id='infant-increase' onClick={increaseInfant}>+</div>
            </div>
          </div>

          <hr/>

          <span className='passengers-number-title-span'>Class</span>

          <div className='classes'>
            <span>Economy</span>
            <div className='choosed-class'></div>
          </div>

          <div className='classes'>
            <span>Business</span>
            <div className='choosed-class'></div>
          </div>

        <div className='personel-button-container'>
          <button onClick={handlePersonel} id='personel-confirm-button'>Confirm</button>
        </div>

        </form>

       </div>
      </div>

      {/* ==== ===== */}
      {/* <div className='available-flights'>
        <div className='available-flights-left'>
          <div className='available-flights-contents'>
            <h1>2 Flights are Found</h1>
          </div>
        </div>
        <div className='available-flights-right'>
          <h1>These Flights Are Available</h1>
          <div className='availa'></div>
        </div>
      </div> */}

      {/* ===== ===== */}
      <div className='fill-forms'>
        <div className='form-wrapper'>

          <div className='fill-form-right'></div>

          <div className='fill-form-left'>
        {/* <h1>Fill The Forms Correctly</h1> */}

            <div className='passenger-card-container'>
                <span className='card-title'>Passenger 1, Adult</span><br/>
                <div className='passenger-card'>
                  <div className='passengers-card-line-one'>
                    <div className='title-div passenger-info-wrapper'>
                      <label>Title</label>
                      <div className='title-options'>
                        <ul>
                          <li>Mr</li>
                          <li>Ms</li>
                          <li>Mrs</li>
                          <li>kid</li>
                        </ul>
                      </div>
                    </div>
                    <div className='first-name-div passenger-info-wrapper'>
                      <label>First Name</label>
                      <input className='passenger-input' type='text' />
                    </div>
                    <div className='middle-name-div passenger-info-wrapper'>
                      <label>Middle Name</label>
                      <input className='passenger-input' type='text' />
                    </div>
                    <div className='last-name-div passenger-info-wrapper'>
                      <label>Last Name</label>
                      <input className='passenger-input' type='text' />
                    </div>
                  </div>
                </div>
            </div>

            </div>

        </div>
      </div>

    </section>
  )
}

export default Book
