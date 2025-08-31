import {Routes,Route} from 'react-router-dom'
import {MovieDetails,MovieList,PageNotFound,SearchPage} from '../pages'

import React from 'react'

export function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/movie/popular' element={<MovieList/>}/>
        <Route path='/movie/top' element={<MovieList/>}/>
        <Route path='/movie/upcomming' element={<MovieList/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
