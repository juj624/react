import React from 'react';
import './App.css';
import Counter from "./Component/Counter.js";


class App extends React.Component  {

  constructor() {
    super();
  
    this.state = {
      count : 0,
      count2 : 99,
    };
  }

  addFunction =()=>{            
    const newCount2 = {
      ...this.state,
      count: this.state.count + 1
    }

    this.setState(newCount2)
  }

  subtractFunction =()=>{ 
    if(this.state.count > 0) { 

    const newCount = {
      ...this.state,
        count: this.state.count - 1
      }

      this.setState(newCount)
    }
  }

  ///// button 2//////

  addFunction2 =()=>{ 
    if(this.state.count2 < 100){  
      
      const newCount2 = {
      ...this.state,
      count2: this.state.count2 + 1
    }

    this.setState(newCount2)
    }
  }

  subtractFunction2 =()=>{ 
  
    const newCount = {
      ...this.state,
        count: this.state.count2 - 1
    }

      this.setState(newCount)
  }

  render() {
    return (
      <div>
          <h1>Counter</h1>
         <Counter count={this.state.count} addFunction={this.addFunction} subtractFunction={this.subtractFunction} />
         <Counter count={this.state.count2} addFunction={this.addFunction2} subtractFunction={this.subtractFunction2} />
      </div>
    );
  }
}



export default App;
