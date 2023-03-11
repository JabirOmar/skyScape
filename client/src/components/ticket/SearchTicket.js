// import React, { useEffect, useState } from 'react'
import  {IoIosSearch } from 'react-icons/io'

function SearchTicket() {

    // const [tickets, setTickets] = useState([])
    // let url = 'http://localhost:3000/passengers/' + inputValue

    const handleSearchChange = () => {
        let icon = document.getElementById('search-icon')
        let searchbtn = document.getElementById('search-btn')
        let input = document.getElementById('search-input').value

        if(input.length > 0){
            icon.style.display = 'none'
            searchbtn.style.display = 'block'
        }else {
            icon.style.display = 'block'
            searchbtn.style.display = 'none'
        }
    }

    const displayTicket = () => {
        let inputValue = document.getElementById('search-input').value
        console.log(inputValue)
    }

    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(setTickets)
    // },[])

    // console.log(tickets)

    
    const handleTicketSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <form className='search-container' onSubmit={handleTicketSubmit}>
      <input onChange={handleSearchChange} onFocus={handleSearchChange} type='text' placeholder='Search Your Ticket Number' id='search-input' required />
      <IoIosSearch id='search-icon'/>
      <button id='search-btn' type='submit' onClick={() => {displayTicket();}}>Search</button>
    </form>

    {/* {
        tickets.map(ticket => {
            return (
                <div key={ticket.id}>
                     <ul>
                        <li>{ticket.departure}</li>
                     </ul>
                </div>
            )
        })
    } */}
    </>
  )
}

export default SearchTicket
