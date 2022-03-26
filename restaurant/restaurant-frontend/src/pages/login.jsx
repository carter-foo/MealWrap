import React, { Component } from "react";
import axios from 'axios'
import Button from "@material-ui/core/Button";

export default class LoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      text1: "",
      passwordShown: false,
      setPasswordShown: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleText1Change = this.handleText1Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.setState({ passwordShown: false });
  }

  handleText1Change(event) {
    this.setState({ text1: event });
  }

  handleSubmit() {
    axios.post("/login", {
      phone: this.state.username,
      password: this.state.password,
    }).then((res) => {
      if(res.data.id === null) {
        this.setState({text1: "Invalid"})
      } else {
        this.props.authenticate(res.data.id);
      }
    })
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-content">
          <h1>Please log in to access your restaurant</h1>
          <form>
            <b>Phone number:</b>
            <br />
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <br />
            <b>Password:</b>
            <br />
            <input
              value={this.state.password}
              type={this.state.passwordShown ? "text" : "password"}
              onChange={this.handlePasswordChange}
            />
          </form>
          <Button
            variant="outlined"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          {/* <APIDirectButton text="Submit" route="/home" state={this.state} func={this.handleText1Change}/> */}
          <p>{this.state.text1}</p>
        </div>
      </div>
    );
  }
}