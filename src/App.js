import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Exercise1 from './tehtävät/Exercise1';
import Exercise2 from './tehtävät/Exercise2';
import Exercise3 from './tehtävät/Exercise3';
import Exercise4 from './tehtävät/Exercise4';
import Exercise5 from './tehtävät/Exercise5';
import Main from './tehtävät/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Front end -ohjelmointi React Basics exercises
        </header>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/exercise1">Exercise 1</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/exercise2">Exercise 2</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/exercise3">Exercise 3</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/exercise4">Exercise 4</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/exercise5">exercise 5-8 </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Main} />
            <Route path="/exercise1" component={Exercise1} />
            <Route path="/exercise2" component={Exercise2} />
            <Route path="/exercise3" component={Exercise3} />
            <Route path="/exercise4" component={Exercise4} />
            <Route path="/exercise5" component={Exercise5} />
          </div>
        </BrowserRouter>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;
