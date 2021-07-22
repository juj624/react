import React from "react"
class Card extends React.Component {

    render(){
        return(
            <div>
                <p>name={this.props.name}</p>
                <p>capital={this.props.capital}</p>
                <p>region={this.props.region}</p>
                <p>population={this.props.population}</p>
                <img src={this.props.flag}></img>
            </div>

        )
    }
}


export default Card;