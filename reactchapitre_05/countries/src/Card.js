import React from "react"
class Card extends React.Component {

    render(){
        return(
            <div className="card text-center">
                <img src={this.props.flag}></img>
                 <p>name={this.props.name}</p>
                <p>capital={this.props.capital}</p>
                <p>region={this.props.region}</p>
                <p>population={this.props.population}</p>
            </div>

        )
    }
}


export default Card;