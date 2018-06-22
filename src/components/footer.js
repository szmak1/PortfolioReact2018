import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/loga.png'


const Footer = () => (
  <div
    style={{
      background: '#438496',
      marginBottom: '0',
      textAlign: 'center',
      position: 'absolute',
      width: '100%',
      height: '300px',
      
    }}
  >
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <foooter className="foooter">
    <div className="icons-social">
    <a className="facebook" href="#" target="_blank"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
    <a className="linkedin" href="#" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
    <a className="google" href="#" target="_blank"><i className="fa fa-google-plus fa-2x" aria-hidden="true"></i></a>
    <a className="github" href="#" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    <a className="fcc" href="#" target="_blank"><i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></a>
    </div>
  <div className="signature">
    <p className="signature-text">Developed and designed by David Szmak</p>
  </div>
    </foooter>
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
     <div className="logaFooter"><img src={logo} alt="Logo" /></div>

  </div>
)

export default Footer
