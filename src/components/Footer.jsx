import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="socialmedia">
            <InstagramIcon />
            <GitHubIcon />
            <FacebookIcon />
            <TwitterIcon/>
            <p>&copy; 2022 hadaro's pizza.com</p>
        </div>
    </div>
  )
}

export default Footer
