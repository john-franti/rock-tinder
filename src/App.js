import React from "react";
import './App.css'
import "./assets/lumen.min.css";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Dig from './components/Dig'
import Matches from './components/Matches'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/dig" component={Dig} />
          <Route path="/matches" exact component={Matches} />
        </div>
      </Router>
    </>
  );
}

export default App;
