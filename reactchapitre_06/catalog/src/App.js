import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './component/Home';
import Movies from './component/Movies'
import './App.css';


class App extends React.Component {

	
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={Movies} />
          </Switch>
      </BrowserRouter>
    );
  }
}
export default App;