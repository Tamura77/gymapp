import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Exercises from './pages/exercises';
import Nutrition from './pages/nutrition';
import Planner from './pages/planner';

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = '/exercises' element={<Exercises/>}/>
          <Route path = '/nutrition' element={<Nutrition/>}/>
          <Route path = '/planner' element={<Planner/>}/>
        </Routes>
      </Router>
  );
}
 export default App