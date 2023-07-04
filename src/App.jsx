import { useRef } from 'react'
import './App.css'
import { Movies } from './Components/movies'

function App() {
  const inputRef = useRef()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  )
}

export default App
