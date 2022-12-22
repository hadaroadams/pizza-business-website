import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
    const [openLink,setopenLink] = useState(false);
    const changeid =()=> setopenLink(!openLink)

  return (
    <div className='navbar'>
        <div className="leftside" id={openLink?'open':'close'}>
            <img className='logo' src={Logo} alt="" />
            <div className="hiddenLinks" >
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
       
        <div className="rightside">
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={changeid} className='navButton'><MenuIcon className='menulogo'/></button>
            
        </div>
      
    </div>
  )
}

export default Navbar
