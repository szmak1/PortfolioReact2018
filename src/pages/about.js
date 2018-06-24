import	React from 'react'
import Link from 'gatsby-link';

import Davidszmak from '../assets/davidszmak.png'

const AboutPage = () => (
		<div>
		<div className="wrapperVessel">
		
		<div className="davidszmak"><img src={Davidszmak} alt="Jobb som Front End Developer" />
			<div className="davidsOM">
			<h1>Om mig</h1>
			<p>Hej! Jag heter David och har stort passion för programmering, tog examen som front end developer på yrkeshögskolan KYH i Malmö. På min fritid jobbar jag som DJ och älskar och producera eleltronisk musik.</p>

			</div>
		</div>

		<div className="davids2">
			<h1>Som frontendutvecklare</h1>
<p>Jag skapar webbplatser som gör att användaren kan uppleva webbplatsen på bästa och mest lämpliga sätt som passar den enhet de använder. Utvecklar med responsiv layout från minsta till största enheter. <br />


Min front-end byggprocess innebär användning av verktyg som Sass, Gulp, Webpacks, MVC kits och NPM för att påskynda utvecklingen.
Jag kan snabbt och effektivt gå med i ett team, använda verktyg som Git och jobba Agilt som till exempel Scrum metoden.</p>
</div>
		</div>
		</div>
)


export default AboutPage;