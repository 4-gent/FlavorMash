import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './main'
import Swipe from './routes/swipe'
import Match from './routes/match'

export default function App(){
  return(
    <Router>
      {/* This is the file for routing to connect all pages for the application */}
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/swipes' element={<Swipe />} />
        <Route exact path='/match' element={<Match />} />
      </Routes>
    </Router>
  )
}