import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './component/Button';
import Add from './component/Add.js';
import List from './component/List';
import Pay from './component/Pay'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "Add",
      item: [],
    }
  }
  renderCondition(){
    if(this.state.activeTab === "Add"){
        return < Add />
    }else if (this.state.activeTab === "List"){
      return < List/>
    }else if (this.state.activeTab === "Pay"){
        return < Pay/>
    }
  }

  selectAdd = () =>{
    this.setState({
      activeTab:"Add",
    })
  }

  selectList = () => {
    this.setState({
      activeTab:"List",
    })
  }

  selectPay = () => {
    this.setState({
      activeTab:"Pay",
    })
  }

  render() {

    return (
      <div>
        <div className="d-grid gap-2 d-md-block">
          <Button isSelected={this.state.activeTab === "Add" ? true : false} onClick={this.selectAdd}>Add</Button>
          <Button isSelected={this.state.activeTab === "List" ? true : false} onClick={this.selectList}>List</Button>
          <Button isSelected={this.state.activeTab === "Pay" ? true : false} onClick={this.selectPay}>Pay</Button>
        </div>
        {this.renderCondition()}
      </div>
    );
  }

}


export default App;
