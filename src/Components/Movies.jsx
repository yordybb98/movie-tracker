import responseMovies from '../mocks/withResults.json'
import withoutResults from '../mocks/withoutResults.json'

export function ListMovies({ movies }) {
  return (
    <ul>
        {
        movies.map(movie => (
            <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt= "" />
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
    
  const movies = responseMovies.Search
  const hasMovies = movies.length > 0
   
    return (
        hasMovies 
        ? <ListMovies movies = {movies}/>
        : <NoMoviesResults />
    )
}