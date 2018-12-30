import React, { Component } from "react";
import logo from '../../v2.png';

class Original extends Component {

    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/viet-vo/full_week_of_code"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    full week of code start
                </a>
            </header>
        )
        
    }

}

export default Original;