import React from 'react'

class Card extends React.Component{
    constructor() {
        super();
        this.state = {
          image: 'src\componants\public\image\items.png',
          
        }
    }



    render() {
        return (
            
            <div>
                <button onClick={() => this.props.onClick(this.props.productName,this.state.price)} >
                    <img src={this.state.image} alt="item"></img>
                </button>
            </div>
        )
    }
}

export default Card