import React, {Component} from "react";

class Navbar extends Component {

render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">Navbar w/ text</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <p className="nav-link">Home <span className="sr-only">(current)</span></p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Features</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Pricing</p>
                </li>
                </ul>
                <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </div>
        </nav>
    )
} 

}

export default Navbar