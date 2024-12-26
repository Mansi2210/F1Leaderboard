import React from "react";
import capa1 from './assets/Capa_1.svg';
import signal from "./assets/signal 2.svg";
import logo1 from './assets/logos/01.png';
import logo2 from './assets/logos/02.png';
import logo3 from './assets/logos/03.png';
import logo4 from './assets/logos/04.png';
import logo5 from './assets/logos/05.png';
import logo6 from './assets/logos/06.png';
import logo7 from './assets/logos/07.png';

import "./Leaderboard.css";


function Leaderboard(){
    return (
        <div>
            <div className="frame">
            <img className="capa" alt="Capa" src={capa1} />
            <img className="signal" alt="Signal" src={signal} />
            <div className="text-wrapper">ISURGE LEADERBOARD</div>
            <img className="signal" alt="Signal" src={signal} />
            <img className="capa" alt="Capa" src={capa1} />
            </div>
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
    );
}
export default Leaderboard;