import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/loga.png'

import Fb from '../assets/fb.svg'
import In from '../assets/in.svg'
import Insta from '../assets/insta.svg'
import Github from '../assets/github.svg'
import Yt from '../assets/yt.svg'
import Tth from '../assets/tth.svg'
import Stackoverflow from '../assets/stackoverflow.svg'
import Phone from '../assets/phone.svg'
import Email from '../assets/email.svg'

const Footer = () => (
  <div
    style={{
      background: '#438496',
      marginBottom: '0',
      textAlign: 'center',
      position: 'absolute',
      width: '100%',
      height: '450px',
      
    }}
  >
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
<div className="container">
  
  <div className="button one">
    <a href="https://www.instagram.com/djszmak/" target="_blank">
       <img className="NoneM"src={Insta} alt="Logo" />
    </a>
    <span className="tooltip L">Instagram!</span>    
  </div>
  
  <div className="button two">    
    <a href="https://www.linkedin.com/in/davidszmak" target="_blank">
      <img className="NoneM"src={In} alt="Logo" />
    </a>
    <span className="tooltip T">Linkedin!</span>
  </div>
  
  <div className="button three">
    <span className="tooltip B">Github!</span>
    <a href="https://github.com/szmak1" target="_blank">
      <img className="NoneM"src={Github} alt="Logo" />     
    </a>
  </div>
  <div className="button two">    
    <a href="http://www.youtube.com/c/DjSzmak" target="_blank">
      <img className="NoneM"src={Yt} alt="Logo" />
    </a>
    <span className="tooltip T">Youtube!</span>
  </div>
  <div className="button three">
    <span className="tooltip B">TeamTreeHouse!</span>
    <a href="https://teamtreehouse.com/davidszmak" target="_blank">
      <img className="NoneM extraSM"src={Tth} alt="Logo" />     
    </a>
  </div>
    <div className="button two">    
    <a href="https://meta.stackoverflow.com/users/6915308/david-szmak" target="_blank">
      <img className="NoneM"src={Stackoverflow} alt="Logo" />
    </a>
    <span className="tooltip T">Stackoverflow!</span>
  </div>
  <div className="button four">
    <a href="https://facebook.com/david.szmak" target="_blank">
      <img className="NoneM"src={Fb} alt="Logo" /> 
    </a>
    <span className="tooltip R">Facebook!</span>    
  </div> 
  
</div>
<div className="contactCont">
	<img className="NoneM" src={Phone} alt="Logo" /> 
	<h5>+46 767 05 87 33</h5>
	 <img className="NoneM" src={Email} alt="Logo" /> 
	<h5>info@davidszmak.com</h5>
 </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         
        </Link>
        
      </h1>
     
    </div>
    <a href="#">
     <div className="logaFooter"><img src={logo} alt="Logo" /></div>
     </a>
  </div>
)

export default Footer
