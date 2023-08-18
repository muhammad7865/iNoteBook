
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import NoteState from './Context/Notestate';

function App() {

  return (
    <>
    <NoteState>
    <Router>

      <Navbar title="iNoteBook" second="About" />
      <div className="container">


      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about" element={<About></About>}></Route>
      </Routes>
     
      </div>
    </Router>
    </NoteState>
    </>
  )
}

export default App;
