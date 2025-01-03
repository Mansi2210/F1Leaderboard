import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leaderboard from './Leaderboard';
import Scorecard from './Scorecard';
import Logossec from './logossec';

function App() {
 
  return (
    <div className='container'>
      <div>
        <Leaderboard/>
      </div>
      <div>
        <Scorecard/>
      </div>
      <div>
        <Logossec/>
      </div>
    </div>
  )
}

export default App
