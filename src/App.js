
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Alert from './Components/Alert'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import NoteState from './Context/Notestate';

function App() {
  const toggelmode = () => {
    if (mood === "dark") {
      setmood("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mood has been enabled", "success")
    }
    else {
      setmood("dark")
      document.body.style.backgroundColor = "#6c757d"
      showAlert("Dark mood has been enabled", "primary")
    }
  }
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  
  const [alert, setAlert] = useState(null)
  const [mood, setmood] = useState("light")
  return (
    <>
    <NoteState>
    <Router>

      <Navbar title="iNoteBook" second="About" status={mood} toggel={toggelmode}/>
      <Alert alert={alert}/>
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
