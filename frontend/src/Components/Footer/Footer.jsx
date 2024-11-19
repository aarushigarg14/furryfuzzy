import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';  // Add this import statement


import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">

        <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/contactus">contact</Link></li>
        
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Furry_fuzzywhiskers @2024 all the rights are reserved.</p>
      </div>
    </div>
  )
}

export default Footer
