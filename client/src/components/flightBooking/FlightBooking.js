import React from 'react'
import { useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { TbSelector } from 'react-icons/tb'
// import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

import './flightbooking.css'

function FlightBooking() {

  const [cities, setCities] = useState([])
    
    let flightWrapper = document.getElementById('flight-detail-wrapper')
    var price = 0
    let departValue = document.getElementById('dep-selected').innerText
    let destiValue = document.getElementById('des-selected').innerText

    const [nationalities, setNationalities] = useState([])
    const [departurePlace, setDeparture] = useState(departValue)
    const [destinationPlace, setDestination] = useState(destiValue)
    const [flightDate, setFlightDate] = useState('')
    const [returningDate, setReturningDate] = useState('')
    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [nationality, setNationality] = useState('')
    // const [priceValue, setPrice] = useState('')
    
    const passengerInfo = {
      departure: departurePlace,
      destination: destinationPlace,
      departureDate: flightDate,
      returnDate: returningDate,
      title,
      firstName,
      middleName,
      lastName,
      gender,
      age,
      nationality
    }

    
    // ===== MiniBook JavaScript Start

    // useEffect(() => {
      // let departValue = document.getElementById('dep-selected').innerText
      // let destiValue = document.getElementById('des-selected').innerText
      // setDeparture(departValue)
      // setDestination(destiValue)
    // })

    useEffect(() => {
      fetch('http://localhost:3000/countries')
      .then(res => res.json())
      .then(setCities)
    },[])
    
    useEffect(() => {
        fetch('http://localhost:3000/countries')
        .then(res => res.json())
        .then(setNationalities)
      },[])

    function handleDeparture() {
        let depOptions = document.getElementById('dep-options')
        let desOptions = document.getElementById('des-options')
        let tripOptions = document.getElementById('trip-options')

        tripOptions.classList.remove('active')
        desOptions.classList.remove('active')
        depOptions.classList.toggle('active')

        let li = document.querySelectorAll('.dep-links')
        let selected = document.getElementById('dep-selected')

        li.forEach(link => {
            link.addEventListener('click', function(){
                li.forEach(city => city.classList.remove('selected'));
                this.classList.add('selected')
                selected.innerText = link.innerText
                depOptions.classList.remove('active')
            })
        })
    }

    function handleDepartChange() {
      console.log('object')
    }

    function handleDestination() {
        let depOptions = document.getElementById('dep-options')
        let desOptions = document.getElementById('des-options')
        let tripOptions = document.getElementById('trip-options')

        depOptions.classList.remove('active')
        desOptions.classList.toggle('active')
        tripOptions.classList.remove('active')

        let li = document.querySelectorAll('.des-links')
        let selected = document.getElementById('des-selected')

        li.forEach(link => {
            link.addEventListener('click', function(){
                li.forEach(city => city.classList.remove('selected'));
                this.classList.add('selected')
                selected.innerText = link.innerText
                desOptions.classList.remove('active')
            })
        })
    }

    function handleTripOptions() {
        let depOptions = document.getElementById('dep-options')
        let desOptions = document.getElementById('des-options')
        let tripOptions = document.getElementById('trip-options')

        depOptions.classList.remove('active')
        desOptions.classList.remove('active')
        tripOptions.classList.toggle('active')

        let li = document.querySelectorAll('.ways')
        let selectedWay = document.getElementById('way-selected')
        // let returnDate = document.getElementById('return-date')

        li.forEach(link => {
            link.addEventListener('click', function(){
                li.forEach(city => city.classList.remove('selected'));
                this.classList.add('selected')
                selectedWay.innerText = link.innerText
                tripOptions.classList.remove('active')
            })
        })
    }

    function handleReturn(){
        const returningDate = document.getElementById('return-date')
        // returningDate.style.display = 'flex'
        returningDate.classList.add('returning')
    }

    function handleOneWay(){
        let returningDate = document.getElementById('return-date')
        // returningDate.style.display = 'none'
        returningDate.classList.remove('returning')
    }

    function handleFirstSubmit(e) {
        e.preventDefault()
        flightWrapper.style.transform = 'translateY(-100%)'
        console.log(departurePlace)
        console.log(destinationPlace)
    }
    // ===== MiniBook JavaScript End

    // ===== Flight Price Start

    setTimeout(() => {
        let classDiv = document.querySelectorAll('.class-div')
        classDiv.forEach(div => {
            div.addEventListener('click', function(){
              price = div.innerText
            })
        })
    }, 500);
    function next(){
      flightWrapper.style.transform = 'translateY(-300%)'
    }
    // ===== Flight Price End

    // ===== Booking Start
    function fillPassengerInfo(){
      fetch('http://localhost:3000/passengers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(passengerInfo)
      })
      flightWrapper.style.transform = 'translateY(-200%)'
    }
    // ===== Booking End

    // ===== Payment Start
    // ===== Payment End

  return (
    <section className='flight-booking-section'>

      <div id='flight-detail-wrapper'>
        <section id='flight-mini-book-section'>
          <form className='mini-book-form' onSubmit={handleFirstSubmit}>
    
            <div className='mini-book-wrapper'>
    
              <div className='input-container'>
                  <label className='input-label'>Departure</label>
                  <div className='dropdown'>
                      <div className='select' onClick={handleDeparture}>
                          <span id='dep-selected' >From</span>
                          <AiOutlineCaretDown />
                      </div>
                      <ul className='options' id='dep-options'>
                          {
                              cities.sort( (a, b) => a.countryName > b.countryName ? 1 : -1)
                              .map(city => {
                                  return(
                                      <div className='country-list' key={city.id}>
                                          <span className='coutry'>{city.countryName}</span>
                                          <li className='dep-links'>{city.cityOne}</li>
                                          <li className='dep-links'>{city.cityTwo}</li>
                                          <li className='dep-links'>{city.cityThree}</li>
                                      </div>
                                  )
                              })
                          }
    
                      </ul>
                  </div>
              </div>
    
              <div className='input-container'>
                  <label className='input-label'>Destination</label>
                  <div className='dropdown'>
                      <div className='select' onClick={handleDestination}>
                          <span id='des-selected'>To</span>
                          <AiOutlineCaretDown />
                      </div>
                      <ul className='options' id='des-options'>
                          {
                              cities.sort( (a, b) => a.countryName > b.countryName ? 1 : -1 ).map(city => {
                                  return(
                                      <div className='country-list' key={city.id}>
                                          <span className='coutry'>{city.countryName}</span>
                                          <li className='des-links'>{city.cityOne}</li>
                                          <li className='des-links'>{city.cityTwo}</li>
                                          <li className='des-links'>{city.cityThree}</li>
                                      </div>
                                  )
                              })
                          }
                      </ul>
                  </div>
              </div>
    
              <div className='input-container'>
                  <label className='input-label'>Trip</label>
                  <div id='trip-drop-down'>
                      <div className='select' onClick={handleTripOptions}>
                          <span id='way-selected'>Return</span>
                          <AiOutlineCaretDown />
                      </div>
                      <ul className='options' id='trip-options'>
                          <li className='ways' onClick={handleReturn}>Return</li>
                          <li className='ways' onClick={handleOneWay}>One Way</li>
                      </ul>
                  </div>
              </div>
    
              <div className='input-container'>
                  <label className='input-label'>Depart</label>
                  <div className='dropdown date-container'>
                      <div className='select'>
                          <input className='date-input' id='depart-date'  type='date' value={flightDate} onChange={(e) => setFlightDate(e.target.value)} />
                      </div>
                  </div>
              </div>
    
              <div className='input-container returning' id='return-date'>
                  <label className='input-label'>Return</label>
                  <div className='dropdown date-container'>
                      <div className='select'>
                          <input className='date-input' id='return-date-input' type='date' value={returningDate} onChange={(e) => setReturningDate(e.target.value)} />
                      </div>
                  </div>
              </div>
    
              <div className='button-container'>
                  <button type='submit'>
                      Continue
                  </button>
              </div>
    
            </div>
    
          </form>
        </section>

        <section id='flight-passenger-detail'>
            <div className='booking-section'>
                <div className='booking-left-container'>
                  <div id='booking-left-content-wrapper'>
                    <h1>SkyScape Filght Booking</h1>
                  </div>
                </div>
                <div className='booking-right-container'>
                  <div id='right-booking-top'>
                    <h2>Complete Your Booking</h2>
                  </div>
                  <div id='right-booking-middle'>
          
                    <form className='passenger-info-form'>
          
                      <div className='indi-conta' id='title-wrapper'>
                        <label>Title</label>
                        <div className='select-container'>
                          <select id='passenger-title' value={title} onChange={(e) => setTitle(e.target.value)}>
                            <option></option>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Child</option>
                            <option>Infant</option>
                          </select>
                          <TbSelector className='dropdown-icon'/>
                        </div>
                      </div>
          
                      <div className='cards-conta' id='name-contianer'>
                        <div className='indi-conta' id='first-name-wrapper'>
                          <label>First Name</label>
                          <input type='text' id='passenger-first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className='indi-conta' id='middle-name-wrapper'>
                          <label>Middle Name</label>
                          <input type='text' id='passenger-middle-name' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                        <div className='indi-conta' id='last-name-wrapper'>
                          <label>Last Name</label>
                          <input type='text' id='passenger-last-name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                      </div>
          
                      <div className='cards-conta' id='general-container'>
                        <div className='indi-conta' id='gender-wrapper'>
                          <label>Gender</label>
                          <div className='select-container'>
                            <select id='passenger-gender' value={gender} onChange={(e) => setGender(e.target.value)} >
                              <option></option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                            <TbSelector className='dropdown-icon'/>
                          </div>
                        </div>
                        <div className='indi-conta' id='age-wrapper'>
                          <label>Age</label>
                          <input type='number' id='passenger-age' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='indi-conta' id='nationality-wrapper'>
                          <label>Nationality</label>
                          <div className='select-container'>
                            <select id='passenger-nationality' value={nationality} onChange={(e) => setNationality(e.target.value)} >
                              <option></option>
                              {
                                nationalities.map(country => {
                                  return(
                                    <option key={country.id}>{country.nationality}</option>
                                  )
                                })
                              }
                            </select>
                            <TbSelector className='dropdown-icon'/>
                          </div>
                        </div>
                      </div>
          
                    <button type='button' id='submit-btn' onClick={fillPassengerInfo}>Submit</button>
                    </form>
                  </div>
                </div>
            </div>
        </section>

        <section id='flight-flight-Price'>
          <div className='price-section'>
            <div className='price-left-div'>
               <h1>SkyScape Flight Pricing</h1>
            </div>
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
                                <div className='class-div' onClick={next}>
                                    <span>4,000 Birr</span>
                                </div>
                             </div>
                          </div>
                          <div className='price-and-class-wrapper'>
                             <div className='class-div-wrapper'>
                                <p>Business</p>
                                <div className='class-div' onClick={next}>
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
                                <div className='class-div' onClick={next}>
                                    <span>4,500 Birr</span>
                                </div>
                             </div>
                          </div>
                          <div className='price-and-class-wrapper'>
                             <div className='class-div-wrapper'>
                                <p>Business</p>
                                <div className='class-div' onClick={next}>
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
                                <div className='class-div' onClick={next}>
                                    <span>4,500 Birr</span>
                                </div>
                             </div>
                          </div>
                          <div className='price-and-class-wrapper'>
                             <div className='class-div-wrapper'>
                                <p>Business</p>
                                <div className='class-div' onClick={next}>
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
          </div>
        </section>

        <section id='flight-payment'>
            <div className='payment-section'>
              <div className='payment-left-div'>
                <h2>SkyScape Payment</h2>
              </div>
              <div className='payment-right-div'>
                <h2>Payment And Confirmation</h2>
                {/* <div id='payment-summary'>
                <ul>
                  <li>Flying From {departurePlace} To {destinationPlace} </li>
                  <li>Passenger Name: {title} {firstName} {middleName} {lastName}</li>
                  <li>Passenger Age: {age} Years Old</li>
                  <li>Flight Class: Economy</li>
                  <li>Date Of Departure: {flightDate}</li>
                  <li>Date Of Return: {returningDate}</li>
                  <li>Departure Time: 5:00AM</li>
                  <li>Landing Time: 6:00AM</li>
                  <li>Enterance Gate: A1</li>
                  <li>Total: {price} ETB</li>
                </ul>
              </div> */}

              <div className='ticket-conatiner'>
                <div className='ticket-left'>
                  <div id='ticket-left-1'>
                    <span>Boarding Pass</span>
                  </div>
                  <div id='ticket-left-2'></div>
                  <div id='ticket-left-3'></div>
                </div>
                <div className='ticket-right'>
                  <div id='ticket-right-1'></div>
                  <div id='ticket-right-2'></div>
                  <div id='ticket-right-3'></div>
                </div>
              </div>
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
              </div>
            </div>
        </section>
      </div>

    </section>
  )
}

export default FlightBooking
