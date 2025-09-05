import React from 'react'
import {Header,Footer} from './components'
//import { MovieList} from './pages'
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
