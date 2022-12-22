import React from 'react'
import { Link } from 'react-router-dom';
import BackGround from '../assets/pizza.jpeg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BackGround})`}}>
        <div className='header_container' >
            <h1>Hadaro's Pizza</h1>
            <p>PIZZA TO FIT EVERYBODY'S TASTE</p>
            <Link to='/menu'>
                <button className='homeButton'>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
