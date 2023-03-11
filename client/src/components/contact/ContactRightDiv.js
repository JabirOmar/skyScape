import React from 'react'

function ContactRightDiv() {

    function handleCommentSubmit(e){
        e.preventDefault()
    }

  return (
    <div className='contact-right-section'>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <label>Your Name</label>
          <input type='text' required />
        </div>
        <div>
          <label>Your Email</label>
          <input type='email' required />
        </div>
        <div>
          <label>Comment</label>
          <textarea required />
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default ContactRightDiv
