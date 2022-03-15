import React, { Component } from 'react';
import DirectButton from "../components/directButton";



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', text1: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleText1Change = this.handleText1Change.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
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
            <input value={this.state.password} onChange={this.handlePasswordChange}/>
          </form>
          <DirectButton text="Submit" route="/home" state={this.state} func={this.handleText1Change}/>
          <p>{this.state.text1}</p>
        </div>
      </div>
    );
  }
}