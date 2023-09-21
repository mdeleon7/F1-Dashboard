import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage, DriversPage, ConstructorsPage, CalendarPage} from './pages'
import {Header} from './components'

const App = () => {
  
  return (
      
        <Router>
          <Header />

          <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route exact path='/driver-standings' element={<DriversPage />}/>
            <Route exact path='/constructor-standings' element={<ConstructorsPage />}/>
            <Route exact path='/calendar' element={<CalendarPage />}/>
          </Routes>
        </Router>
      
  )
};

export default App
