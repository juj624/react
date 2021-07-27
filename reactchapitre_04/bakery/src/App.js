
import React from 'react';
import Button from './componants/Button';
import Add from './componants/Add';
import List from './componants/List';
import Pay from './componants/Pay';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTabs: 'add',
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.add = this.add.bind(this)
  }

  selectAdd(e) {
    console.log(e)
    this.setState({
      activeTabs: 'add'
    })
  }

  selectList() {
    this.setState({
      activeTabs: 'list'
    })
  }

  selectPay() {
    this.setState({
      activeTabs: 'pay'
    })
  }

  add(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }

  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay items={this.state.items}></Pay>
    }
  }



  render() {
    return (
      <div>
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
