



function Cards (props){

        return (
            <div className="card" style={{width: "18rem"}} onClick={props.onclick}>
                <img src={"https://image.tmdb.org/t/p/w300" + props.poster_path} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.release_date}</li>
                </ul>
            </div>
    );
    }

  
  
  export default Cards;