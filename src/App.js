import React from 'react'
import {Header,Footer} from './components'
//import { MovieDetails} from './pages'
import {AllRoutes} from './routes/AllRoutes'
export default function App() {
  return (
    <>              
      <Header/>
      <main>
          <AllRoutes />
        </main>
      
      <Footer/>   
      
    </>
    
  )
}
