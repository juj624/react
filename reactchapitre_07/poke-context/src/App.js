import React  from 'react'
import {Route, Switch, BrowserRouter, Link} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {createContext, useState} from "react";

export const UserContext = createContext();

function App() {
  const [isLogged, setLogged] = useState(false);
  const setAuth = () =>{setLogged (true ? false : true)}

  const value ={
    isLogged : isLogged,
    setAuth : setAuth,
  }
  
  return (
    <div>
      <UserContext.Provider value = {value}>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
