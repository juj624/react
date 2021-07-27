import React from 'react'
import Card from './Card';

class Pay extends React.Component{
    constructor(){
        super();

        this.state={
        basket:[],
        total:0 ,
        totalTVA:0,
        totalEcoTax:0,
        totalTTC:0,
        }

    }

    handleSelect = (name, price) => {

        console.log(name, price)
        this.state={
            name:"",
            price:"",
            basket:[],
        }

    }

    render() {
        return (
            <div>
            <p>total={this.props.total}</p>
            <p>totalTVA={this.props.totalTVA}</p>
            <p>totalEcoTax={this.props.totalEcoTax}</p>
            <p>totalTTC={this.props.totalTTC}</p>
            {this.props.items.map(item => <Card productName={item.name} price={item.price} onClick={this.handleSelect}/>)}
            </div>
        )
    }
}

export default Pay