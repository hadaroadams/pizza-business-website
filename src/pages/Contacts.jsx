import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contacts() {
  return (
    <div className='contact' >
      
      <div className='downSide'>
          <div className='contactLeft' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
          <div className='contactRight'>
          <h1>Contact Us</h1>
            <form action="">
              <label htmlFor="">Your Full Name</label>
              <br/>
              <input type="text" placeholder=' Full name'/>
              <br/>
              <label htmlFor=""> Your Emaii Address</label>
              <br/>
              <input type="email" placeholder=' Email address'/>
              <br/>
              <label htmlFor="">Your Message</label>
              <br/>
              <textarea placeholder='message'></textarea>
              <br/>
              <input type='submit' className='submit'/>
            </form>
          </div>
      </div>
       
    </div>
  )
}

export default Contacts
