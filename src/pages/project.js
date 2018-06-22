import	React from 'react'
import Link from 'gatsby-link';

import Orkla from '../assets/orkla.png'
import Holy from '../assets/holy.png'
import Fmm from '../assets/fmm.png'
import Roofit from '../assets/roofit.png'
import Stads from '../assets/stads.png'
import Slp from '../assets/slp.png'
import Hmd from '../assets/hmd.png'
import Salu from '../assets/salu2.png'
import Cottex from '../assets/cottex.png'
import Buss from '../assets/buss.png'
import Noxo from '../assets/noxo.png'
import Ds from '../assets/ds.png'

const Project = () => (
		<div style={{
     	
      paddingBottom: '20',
 
}}>
		<div className="wrapperVessel">
		<div style={{
     
      paddingBottom: '0',
      textAlign: 'center',

    }}>
		<h1>Projekt</h1>
		<p>Utvecklade med WordPress & React</p>
		</div>

<div className="wrapProject">

<ul className="gel">
  <li>
    <img src={Orkla}/>
  </li>
  <li>
    <img src={Holy}/>
  </li>
  <li>
    <img src={Fmm}/>
  </li>
  <li>
    <img src={Roofit}/>
  </li>
  <li>
    <img src={Stads}/>
  </li>
  <li>
    <img src={Slp}/>
  </li>
  <li>
    <img src={Hmd}/>
  </li>
  <li>
    <img src={Salu}/>
  </li>
  <li>
    <img src={Cottex}/>
  </li>
  <li>
    <img src={Buss}/>
  </li>
  <li>
    <img src={Noxo}/>
  </li>
  <li>
    <img src={Ds}/>
  </li>
</ul>


</div>

		</div>
		</div>
)


export default Project;