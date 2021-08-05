import React from "react";




class Cards extends React.Component {

    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={"https://image.tmdb.org/t/p/w300" +this.props.poster_path} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.release_date}</li>
                </ul>
            </div>
    );
    }
}
  
  
  export default Cards;