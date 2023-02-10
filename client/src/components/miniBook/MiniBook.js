import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'
import './miniBook.css'

function MiniBook() {
    
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/countries')
        .then(res => res.json())
        .then(setCities)
    },[])

    console.log(cities)

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
        let returnDate = document.getElementById('return-date')

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

    const navigate = useNavigate()
    function handleSubmit(e) {

        // const returningDate = document.getElementById('return-date')
        let departure = document.getElementById('dep-selected').innerText
        let destination = document.getElementById('des-selected').innerText
        let departDateInput = document.getElementById('depart-date')
        let returnDateInput = document.getElementById('return-date-input')
        let returnDate = document.getElementById('return-date')

        if (departure === 'From' || destination === 'To' || departure === destination){
            alert('Fill the Departure and Destination correctly')
             e.preventDefault()
        }else if(departDateInput.value.length === 0){
            alert('Fill The Departure Date Correctly')
             e.preventDefault()
        }else if(returnDate.classList.contains('returning') && returnDateInput.value.length === 0){
            alert('Fill The Return Date Correctly')
             e.preventDefault()
        }else {
            navigate("/booking")
        }
    }

  return (
    <form className='mini-book-form' onSubmit={handleSubmit}>

      <div className='mini-book-wrapper'>

        <div className='input-container'>
            <label className='input-label'>Departure</label>
            <div className='dropdown'>
                <div className='select' onClick={handleDeparture}>
                    <span id='dep-selected'>From</span>
                    <AiOutlineCaretDown />
                </div>
                <ul className='options' id='dep-options'>
                    {
                        cities.sort( (a, b) => a.cityOne > b.cityThree ? 1 : -1)
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
                        cities.map(city => {
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
                    <input className='date-input' id='depart-date'  type='date' placeholder='none' />
                </div>
            </div>
        </div>

        <div className='input-container returning' id='return-date'>
            <label className='input-label'>Return</label>
            <div className='dropdown date-container'>
                <div className='select'>
                    <input className='date-input' id='return-date-input' type='date' />
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
  )
}

export default MiniBook
