import React, { Component } from 'react';
import APIDirectButton from "../components/apiDirectButton";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', text1: '', passwordShown: false, setPasswordShown: false};
    

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleText1Change = this.handleText1Change.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
    this.setState({passwordShown: false});
  }

  handleText1Change(event) {
    this.setState({text1: event});
  }

  render() {
    return (
      <div>
        <div>
          <h1>Please log in to access your restaurant</h1>
          <form>
            <label>Username:</label>
            <br />
            <input value={this.state.username} onChange={this.handleUsernameChange} />
            <br />
            <label>Password:</label>
            <br />
            <input value={this.state.password} type={this.state.passwordShown ? "text" : "password"} onChange={this.handlePasswordChange}/>
          </form>
          <APIDirectButton text="Submit" route="/home" state={this.state} func={this.handleText1Change}/>
          <p>{this.state.text1}</p>
        </div>
      </div>
    );
  }
}