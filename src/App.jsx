
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
