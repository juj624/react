import React  from 'react'
import {Route, Switch, BrowserRouter, Link} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './components/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
          <nav className="navbar">  
                  <ul>        
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/Login">Login</Link></li>
                  </ul> 
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
