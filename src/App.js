import React from 'react'
import Navbar from "./Navbar";
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import "./App.css";


function App() {
  return (
    <Router>    
        <Navbar />
        <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/work" component={Work}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
