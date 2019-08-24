import React, { Component } from "react";
import "../Layouts/Main.scss";
class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Topbar;
