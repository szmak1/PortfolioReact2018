import	React from 'react'
import Link from 'gatsby-link';

const Menu = () => (
	<div style={{
		background: '#286DA8',
		paddingTop: '10px',

	}}>
	
	<ul className="navHover" style={{
		listStyle: 'none',
		display: 'flex',
		
		justifyContent: 'space-evenly',
	}}>
	<li>
		<Link to="/">Hem</Link>
	</li>
	<li>
		<Link to="/about">Om mig</Link>
	</li>
	<li>
	<Link to="/skills">Skills</Link>
	</li>
	<li>
	<Link to="/project">Projekt</Link>
	</li>
	<li>
	<Link to="/blog">Blogg</Link>
	</li>

	</ul>

	</div>

)


export default Menu;