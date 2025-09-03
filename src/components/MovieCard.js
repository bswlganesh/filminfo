import React from 'react'
import backupimage from '../assets/backup.jpg'
export default function MovieCard({movie}) {
    

  return (
    <div className='div1' >
            
          <img className='img1' src={movie.Poster?movie.Poster:backupimage} alt='movei'/>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
    </div>
  )
}
