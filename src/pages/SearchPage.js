import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'


export default function SearchPage() {
  
  const [searchParam]=useSearchParams()
  const queryTerm=searchParam.get('s')
 
   const apiUrl = `https://www.omdbapi.com/?apikey=2a6b8207&s=${queryTerm}`;
  const {data:movies}=useFetch({ url: apiUrl })
  return (
    <main>
      <p className="text-3xl text-gray-700 dark:text-white">
          { movies.length === 0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'` }
        </p>
          <section className='card'>
            {movies.map((movie)=>(
               <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
           
          
          </section>
        </main>
  )
}
