import React from "react";

// const myCSS = {
//   fontSize: 100,
//   color: "black",
// }

class Box extends React.Component {
  
  render() {
    const vlc = () =>{
     if(this.props.icon !== "local_drink"){
        return <input type="range" 
        min={this.props.min} max={this.props.max} value =    {this.props.value} onChange={this.props.onChange}>
         </input>
    }
    }
    return (
      <div className="box col-sm-3 col-6 ">
        <span className="material-icons" style={{color: this.props.color, fontSize: 100,}}>{this.props.icon}</span>
        <p>{this.props.value}{this.props.unit}</p>
        {vlc()}
      </div>
    );
  }
}

export default Box; 