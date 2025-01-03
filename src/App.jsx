
import './App.css'
import Leaderboard from './Leaderboard';
import Scorecard from './Scorecard';
import Logos from './Logos';

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
        <Logos/>
      </div>
    </div>
  )
}

export default App
