import React  from 'react'
import {Route, Switch, BrowserRouter, Link} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">             
                    <p> <Link to="/">Home</Link> </p>
                    <p> <Link to="/Login">Login</Link></p>
                </div>
            </nav>
             <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Login" exact component={Login} />
             </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
