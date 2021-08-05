import React from "react";
import {Link} from "react-router-dom";







class Home extends React.Component {

  render() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Popular">Popular</Link></li>
                <li><Link to="/Popularbattle">Poupular-battle</Link></li>
                <li><Link to="/Weekly">Weekly</Link></li>
                <li><Link to="/Weeklybattle">Weekly-battle</Link></li>
                <li><Link to="/Favorites">Favorites</Link></li>
            </ul>
            </nav>
        </div>
);
}
}


export default Home;