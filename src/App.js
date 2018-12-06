import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>

          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component={() => <h1>home page</h1>}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/users" component={() => <h1>Users page</h1>}></Route>
          <Route path="/news" component={() => <h1>News page</h1>}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    ) ;       
  }
}

export default App;
