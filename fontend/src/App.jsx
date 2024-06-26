import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setjokes(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Chai And Frontend</h1>
      <p>Jokes:{jokes.length}</p>

      {
        jokes.map((joke, index)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h3>{joke.content}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
