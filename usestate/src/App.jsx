import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('')

  let name ='';
  function updateName (event){
    name = event.target.value
  }

  return (
    <>
    <p>{name}</p>
    <input value = {name} onChange
    </>
  )
}

export default App
