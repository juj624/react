import React from "react";
import {Link} from "react-router-dom";







class Home extends React.Component {

  render() {
    return (
        <div>
            <h1>Home</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <Link className="nav-link active" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" to="/Popular">Popular</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Popularbattle">Poupular-battle</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Weekly">Weekly</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Weeklybattle">Weekly-battle</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Favorites">Favorites</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Cards">Cards</Link>
                    </li>
                        </ul>
            </div>
        </div>
    </nav>
 </div>
);
}
}


export default Home;