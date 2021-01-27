import React from "react"
import {Link, useLocation} from "react-router-dom"

function Header(){

  const location =useLocation();
return (



      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'cadetblue'}}>
            
       <Link to="/react-portfolio/" className={location.pathname === "/react-portfolio/" ? "nav-link active" : "nav-link"}>
           < a className="navbar-brand ">
         Victor Scherman</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
            <Link to="/react-portfolio/Contact" className={location.pathname === "/react-portfolio/Contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
            </li>
            <li className="nav-item">

            <Link to="/react-portfolio/Portfolio" className={location.pathname === "/react-portfolio/Portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>


              
            </li>
            <li className="nav-item ">
            <Link to="/react-portfolio/" className={location.pathname === "/react-portfolio/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
    
}   


export default Header

//<a className="navbar-brand" href="index.html">Victor Scherman</a>