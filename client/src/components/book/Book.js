import React, { useEffect, useState } from 'react'
import { TbSelector } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
// import MiniBook from '../miniBook/MiniBook'
import './book.css'

function Book() {

  const navigate = useNavigate()

  const [nationalities, setNationalities] = useState([])
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nationality, setUserNationality] = useState('')
  const [gender, setgender] = useState('')
  const [age, setAge] = useState('')

  const passengerInfoTwo = {
    firstName,
    middleName,
    lastName,
    nationality,
    gender,
    title,
    age
  }

  useEffect(() => {
    fetch('http://localhost:3000/countries')
    .then(res => res.json())
    .then(setNationalities)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/passengers', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(passengerInfoTwo)
    })
    navigate('/payment')
  }

  return (
    <section className='booking-section'>
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

          <form onSubmit={handleSubmit} className='passenger-info-form'>

            <div className='indi-conta' id='title-wrapper'>
              <label>Title</label>
              <div className='select-container'>
                <select value={title} onChange={(e) => setTitle(e.target.value)}>
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
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className='indi-conta' id='middle-name-wrapper'>
                <label>Middle Name</label>
                <input type='text' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </div>
              <div className='indi-conta' id='last-name-wrapper'>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className='cards-conta' id='general-container'>
              <div className='indi-conta' id='gender-wrapper'>
                <label>Gender</label>
                <div className='select-container'>
                  <select value={gender} onChange={(e) => setgender(e.target.value)}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <TbSelector className='dropdown-icon'/>
                </div>
              </div>
              <div className='indi-conta' id='age-wrapper'>
                <label>Age</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className='indi-conta' id='nationality-wrapper'>
                <label>Nationality</label>
                <div className='select-container'>
                  <select value={nationality} onChange={(e) => setUserNationality(e.target.value)}>
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

          <button type='submit' id='submit-btn'>Submit</button>
          </form>

        </div>
        <div id='right-booking-bottom'>
          {/* <button>Register</button> */}
        </div>
      {/* <div className='popup'></div> */}
      </div>

      {/* <div id='hiding-section'>
        <MiniBook id='mini-book-inside-book-section'/>
      </div> */}
    </section>
  )
}

export default Book
