import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import logo from '../assets/logaa.svg'
import Footer from '../components/footer'


import './index.css'
/*
let primary = '#286DA8';
let	secondary = '#CD5360';
 let   tertiary = '#B37D4E';
  let  quartenary = '#438496';
*/



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Jag är nyexaminerad Frontendutvecklare och här är lite om min kunskap & ferdigheter' },
        { name: 'keywords', content: 'Frontendutvecklare malmö, Frontendutvecklare skåne, Frontendutvecklare, Fron End Developer, Front-end Developer' },
      ]}
      link={[
      	{ rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.1.0/css/all.css', integrity:'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt', crossorigin:'anonymous'},
      	]}
    /> 
    <div className="vessel">
    <a href="#" target="_self">
    <div className="loga"><img src={logo} alt="Logo" /></div>
    </a>
    <Header siteTitle={data.site.siteMetadata.title} >
    
    </Header>
    <Menu />
    <div
      style={{
        margin: '0 auto',
        
        
        paddingTop: 20,
      }}
    >
      {children()}
    </div>
   
    <Footer className="footer">
   
    </Footer>

    </div>

  </div>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
