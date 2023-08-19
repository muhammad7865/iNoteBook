
import PropTypes from 'prop-types'
import React, { useEffect } from "react";
import {Link,useLocation} from "react-router-dom";


export default function Navbar(props) {
  const location=useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.status} bg-${props.status}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className= {`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className=  {`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">{props.second}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="https://getbootstrap.com/docs/5.3/components/buttons/">Bootstrap</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <div className={`form-check form-switch text-${props.status==="light"?"dark":"light"} `}>
  <input className="form-check-input" onClick={props.toggel} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" color='white'>Enable Dark Mode</label>
</div>

      </form>
    </div>
  </div>
</nav>
  )
}

//defines the types of the props 
Navbar.propTypes={
    title:PropTypes.string,
    react:PropTypes.string
}
//used when there is no prop given by the user 
Navbar.defaultProps={
    title:"hey here",
    react:"cxllicoio"
}

