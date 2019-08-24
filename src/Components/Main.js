import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import MainPanel from "./MainPanel";
class Main extends Component {
  render() {
    return (
      <div className="hboxcls">
        <NavigationBar />
        <MainPanel />
      </div>
    );
  }
}

export default Main;
