import React from 'react'
import logo1 from './assets/logos/01.png';
import logo2 from './assets/logos/02.png';
import logo3 from './assets/logos/03.png';
import logo4 from './assets/logos/04.png';
import logo5 from './assets/logos/05.png';
import logo6 from './assets/logos/06.png';
import logo7 from './assets/logos/07.png';
import './Logos.css'


function Logos(){
  return (
    <div className="titlep">
            
            <div className="logos-container">
                <div className="logos-row">
                <img src={logo1}  className="logo" />
                <img src={logo2}  className="logo" />
                <img src={logo3}  className="logo3" />
                <img src={logo4}  className="logo" />
                <img src={logo5}  className="logo" />
                <img src={logo6}  className="logo" />
                <img src={logo7}  className="logo7" />
                </div>
            </div>
            
        </div>
  )
}

export default Logos
