import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner';
import useTitleChange from '../hooks/useTitleChange';


export default function MovieDetails() {
  const { imdbID } = useParams();
  const [movie,setMovie]=useState({});
const [isLoading, setIsLoading] = useState(true);
 useTitleChange(movie.Title);

  // useEffect(()=>{
  //   setIsLoading(true);
  //  async function fetchMovie() {
  //     const response = await fetch(`https://www.omdbapi.com/?apikey=2a6b8207&i=${imdbID}`);
  //     const json = await response.json();
  //     setmovie(json);
  //  }
  //  setIsLoading(false);
  //  fetchMovie();
  // },[imdbID])

  useEffect(() => {
    async function fetchMovie() {
      // Set loading to true before starting the fetch
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=2a6b8207&i=${imdbID}`);
        const json = await response.json();
        setMovie(json);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        // Set loading to false after the fetch is complete (or has failed)
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [imdbID]);


  return (
     <main>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        movie && (
          <section className="flex justify-around flex-wrap py-5">
            <div className="max-w-sm p-4">
              <img className="rounded" src={movie.Poster !== 'N/A' ? movie.Poster :" backupimage"} alt={movie.Title} />
            </div>
            <div className="max-w-2xl text-gray-700 text-lg dark:text-white p-4">
              <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.Title}</h1>
              <p className="my-4">{movie.Plot}</p>
              <p className="my-7">
                <span className="mr-2 font-bold">Genre:</span>
                <span>{movie.Genre}</span>
              </p>
              <p className="my-7">
                <span className="font-bold">IMDB Rating:</span> {movie.imdbRating}
              </p>
              <p className="my-7">
                <span className="font-bold">Released:</span> {movie.Released}
              </p>
              <p className="my-7">
                <span className="font-bold">Director:</span> {movie.Director}
              </p>
            </div>
          </section>
        )
      )}
    </main>
  )
}
