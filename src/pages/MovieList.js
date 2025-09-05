
import MovieCard from '../components/MovieCard'
import './MovieList.css'
import useFetch from '../hooks/useFetch'

export default function MovieList({url}) {
 

  //const url=`https://www.omdbapi.com/?apikey=2a6b8207&s=2025&type=movie`;
  const {data:movies}=useFetch({url})

  return (
    <main>
      <section className='card'>
        {movies && movies.map((movie)=>(
           <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
       
      
      </section>
    </main>
    
  )
}