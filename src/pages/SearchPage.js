import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'


export default function SearchPage() {
 
  const [searchParam]=useSearchParams()
  const queryTerm=searchParam.get('s')
 
   const apiUrl = `https://www.omdbapi.com/?apikey=2a6b8207&s=${queryTerm}`;
   const { data: movies, isLoading } = useFetch({ url: apiUrl });
  return (
        <main>
      {/* 2. Conditionally render a loading message or the results */}
      { isLoading ? (
        <p className="text-3xl text-gray-700 dark:text-white animate-pulse">Searching...</p>
      ) : (
        <>
          <p className="text-3xl text-gray-700 dark:text-white">
            { movies.length === 0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'` }
          </p>
          <section className='max-w-7xl mx-auto py-7'>
            <div className='flex justify-start flex-wrap'>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
