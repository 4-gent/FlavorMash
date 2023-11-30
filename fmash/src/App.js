import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './main'
import Swipe from './routes/swipe'
import Match from './routes/match'
import Preferences from './routes/preferences'
import Flavor from './routes/flavor'
import Cuisine from './routes/cuisine'

export default function App(){
  return(
    <Router>
      {/* This is the file for routing to connect all pages for the application */}
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/swipes' element={<Swipe />} />
        <Route exact path='/match' element={<Match />} />
        <Route exact path='/preferences' element={<Preferences />} />
        <Route exact path='/preferences/flavor' element={<Flavor />} />
        <Route exact path='/preferences/cuisine' element={<Cuisine />} />
      </Routes>
    </Router>
  )
}