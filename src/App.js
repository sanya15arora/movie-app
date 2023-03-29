import React  from 'react'
import Detail from './component/Detail'
import Movie from './component/Movie'

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
  

     <Routes>
       <Route  path='/' element={<Movie/>}/>
       <Route  path='/detail' element={<Detail/>}/>
     </Routes>

    
    
  )
}


export default App


