import React from 'react'
import '../styles/About.css'
import Topimage from '../assets/multiplePizzas.jpeg';
import LeftImage from '../assets/makingpizza.jpeg';

function About() {
  return (
    <div className='about'>
      <div className="topImage" style={{backgroundImage:`url(${Topimage}`}}></div>
      <div className='buttomSide'>
        <div className='downImage' style={{backgroundImage:`url(${LeftImage}`}}>
          
        </div>
        <div className='aboutText'>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam reiciendis architecto sequi culpa consectetur quaerat, repellat qui minima, esse vitae est laudantium, libero similique quia dicta. Sunt, ipsum laudantium?</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
