import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './component/Home';
import  Weekly from './view/Weekly'
import  Weeklybattle from './view/Weekly-battle'
import  Popular from './view/Popular'
import  popularbattle from './view/Popular-battle'
import  Favorites from './view/Favorites'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


class App extends React.Component {

	
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/Weekly" component={Weekly} />
            <Route path="/Weeklybattle" component={Weeklybattle} />
            <Route path="/Popular" component={Popular} />
            <Route path="/Popularbattle" component={popularbattle} />
            <Route path="/Favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
