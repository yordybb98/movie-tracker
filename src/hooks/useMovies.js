import responseMovies from '../mocks/withResults.json'

export function useMovies() {
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        type: movie.Type
    }))

    return {movies: mappedMovies}
}