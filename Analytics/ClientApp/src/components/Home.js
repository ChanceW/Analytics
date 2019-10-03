import React, { Component } from 'react';
import video from "../Images/report.gif";
import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <center>
                <h1>Welcome to Profisee Analytics</h1>
                <img className="video" src={video} alt="Computer man" />
            </center>
      </div>
    );
  }
}
