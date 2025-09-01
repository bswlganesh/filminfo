import React from 'react'
import {Header,Footer,MovieCard} from './components'
import {MovieDetails,MovieList,PageNotFound,SearchPage} from './pages'
import {AllRoutes} from './routes/AllRoutes'
export default function App() {
  return (
    <>
      <Header/>
      <AllRoutes/>
      <Footer/>   
      
    </>
    
  )
}
