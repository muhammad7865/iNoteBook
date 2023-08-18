
import React, { useState } from 'react'

import Navbar from './Components/Navbar';
import Alert from './Components/Alert'
import Home from './Components/Home';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  const toggelmode = () => {
    if (mood === "dark") {
      setmood("light")
      document.body.style.backgroundColor = "white"
      setAlert("Light mood has been enabled", "success")
    }
    else {
      setmood("dark")
      document.body.style.backgroundColor = "#051e41"
      setAlert("Dark mood has been enabled", "primary")
    }
  }

  const [mood, setmood] = useState("light")
  const [alert, setAlert] = useState(null)


  return (
    <>
    <Router>
      <Navbar title="iNoteBook" second="About" status={mood} toggel={toggelmode} />
      <Alert alert={alert} />

      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about" element={<About></About>}></Route>
      </Routes>
     
    </Router>
    </>
  )
}

export default App;
