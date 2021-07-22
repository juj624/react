import React from "react"

const css ={
  margin: "1rem",
  border: "1px solid grey",
  padding: "5rem",
}

class UserInfo extends React.Component {
    render(){
      return(
        <div>
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
        </div>
      )
    }
}






export default UserInfo;