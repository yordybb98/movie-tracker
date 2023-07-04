import { useMovies } from '../hooks/useMovies'
import './Movies.css'

export function ListMovies({ movies }) {
  return (
    <ul className='listmovies'>
        {
        movies.map(movie => (
            <li key={movie.id} className="movie">
              <div className='movie-li-header'>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p>{movie.type}</p>
              </div>
              <div className='movie-li-footer'>
                <img src={movie.poster} alt= "" className='movie-li-poster' />
              </div>
            </li>
        ))
        }
    </ul>
  )
}

export function NoMoviesResults(){
    return (
        <p>No se encontraron resultados</p>
      )
}

export function Movies () {
    
  const {movies} = useMovies()
  const hasMovies = movies.length > 0

    return (
        hasMovies 
        ? <ListMovies movies = {movies}/>
        : <NoMoviesResults />
    )
}