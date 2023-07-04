import './App.css'
import { Movies } from './Components/movies'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form action="" className='form'>
          <input type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
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
