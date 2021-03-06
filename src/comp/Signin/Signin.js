import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and logs the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
        <div className="row">
        <div className="col-5"></div>
            <div className="card text-center" id="signincard">    
                <form>
                    <div
                    className="form-group">
                    <label>Email Address </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    />
                    </div>
                    <label>Password </label>
                    <div className="form-group">
                    <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    </div>
                    <button 
                    className="btn-primary"
                    onClick={this.handleFormSubmit}
                    path="/">Submit</button>
                </form>
            </div>   
        </div>

    );
  }
}

export default Signin;
