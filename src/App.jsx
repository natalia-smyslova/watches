import { useState } from 'react'
import './App.css'
import WatchList from './components/WatchList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <WatchList />
    </div>
  )
}

export default App
