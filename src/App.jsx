import './App.css'
import { Movies } from './Components/movies'

function App() {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target)) //recuperar varios inputs sin necesidad de usar el useRef
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input name='query' type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <input name='otro' type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <input name='mas' type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
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
