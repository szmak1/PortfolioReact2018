import React from 'react'
import Link from 'gatsby-link';

import workspace from '../assets/workspace.png'
import wikifrontend from '../assets/wikifrontend.png'




const IndexPage = () => (
  <div> 
    <div className="wrapperVessel">
	
	
    <h1>Nyexaminerad Frontendutvecklare i Malmö</h1>
    <p>Detta är mitt portfolio & innehar mina kunskaper & färdigheter som Front End Developer.</p>
    <p>Den här sidan är utvecklad med React & GraphQL, sidan är SUPER snabb och mycket modern utveckingsmiljö.</p>
    <div className="wikifrontend"><img src={wikifrontend} alt="wikifrontend" /></div>
    <br />
    <h2>Vad är en Frontendutvecklare</h2>
    <p>
    Front-utvecklare använder HTML, CSS och JavaScript för att koda 
    webbsidor, applikationer och webbappdesignen som skapats av webbdesigners.
    Har du också kunskaper inom UX-design och kan designa själv som jag kan är det
    en stor fördel. 
    Koden som Front End Developer skriver körs inuti användarens webbläsare 
    (i motsats till en back-end-utvecklare, vars kod körs på webbservern). 
    Tänk på det som: den Backendutvecklaren är ingenjören som designar 
    och skapar system som gör en stadsverksamhet (el, vatten och avlopp, 
    zonering etc.), medan framsidans utvecklare är den som lägger ut på 
    gatorna och se till att allt är korrekt anslutet så att människor kan 
    leva sina liv. 
    De är också ansvariga för att se till att det inte finns några fel eller 
    fel på framsidan, utan att se till att designen visas som den ska över 
    olika plattformar och webbläsare.
    </p>
    <Link to="/page-2/">Läs mer</Link>
    </div>
 	<div className="workspace"><img src={workspace} alt="Jobb som Front End Developer" /></div>
 	
  </div>
  
)

export default IndexPage
