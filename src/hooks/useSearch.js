import { useEffect, useState } from "react"

export function useSearch() {
    const [search, setSearch] = useState(null)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      if (search === null) return

      if (search === ''){
        setError('Ingrese un nombre de pelicula para buscar')
        return
      }
  
      if (search.length < 3){
        setError('No se puede buscar películas con menos de 3 caracteres')
        return
      }

      setError(null)

    },[search])
  
    return {search, setSearch, error}

  }