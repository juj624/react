import React from 'react';

class Add extends React.Component {
  constructor() {
    super()

    this.state = {
      productName:"",
      price:1,
    }
  }

  updateProductName(e){
    this.setState((prevstate) =>{
      return{
        ...prevstate,
        productName:e.target.value
      }
    }
    )
  }

    updatePrice(e){
      this.setState((prevstate) =>{
        return {
          ...prevstate,
          price: e.target.value
        }
      }
      )
  }

  render(){
    return (
      <div className="container-fluid">
          <form className="d-flex">
            <input onChange ={this.updateProductName} className="form-control me-2" type="search" placeholder="item" aria-label="Search" />
            <input type="button" name="name" required
       min="1" max="10" onChange={this.updatePrice}></input>
       <button>Add</button>
          </form>
        </div>
    );
}
}
 

export default Add;
