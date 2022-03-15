import React from "react";
import Navbar from "../components/Navbar";
import PageBottom from "../components/PageBottom";
import "../style/home.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="background">
        <Navbar />
        <div className="homepage">
          <div className="center">
            <h2>Please enter your delivery information:</h2>
            <form>
              <fieldset>
                <div className="spaced-div">
                  <label>Address:</label>
                  <input></input>
                </div>
                <div className="spaced-div">
                  <label>City:</label>
                  <input></input>
                </div>
                <div className="spaced-div">
                  <label>Province:</label>
                  <input></input>
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    console.log("Button clicked!");
                  }}
                >
                  Find restaurants in your area
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <PageBottom />
      </div>
    );
  }
}

export default HomePage;
