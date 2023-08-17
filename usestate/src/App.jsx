import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [name, setName] = useState('Luna')

  return (
    <>

    <h1>Hej. Mit navn er {name}</h1>
    <button onClick={() => setName('Kasper')}>Send en hilsen til Kasper</button>

    </>
  )
}

export default App
