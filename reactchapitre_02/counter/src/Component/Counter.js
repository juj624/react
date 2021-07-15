import React from "react";


class Counter extends React.Component {
    render() {
      return (
        <div class="all-button">
            <h2>{this.props.count}</h2>
          <button className="btn-1" style={{ background: "red", }} onClick={this.props.subtractFunction}>-
          </button>
          <button className="btn-2" style={{ background: "green", }} onClick={this.props.addFunction}>+
          </button>
        </div>
      )
    }
}

export default Counter;