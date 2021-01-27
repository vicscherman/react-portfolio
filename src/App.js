
import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import About from "./components/About"


class App extends Component {
  render() {
    return (
     
     
		<Router>
		<div>
		<Header/>
    <Route  exact path="/react-portfolio/" component={About}/>
    <Route exact path="/react-portfolio/Contact" component={Contact}/>
    <Route exact path="/react-portfolio/Portfolio" component={Portfolio}/>
    <Footer/>
    </div>
      	
     </Router>
    );
  }
}

export default App;