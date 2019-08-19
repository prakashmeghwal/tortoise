import React, { Component } from "react";
import ToolBarcustom from "./Components/ToolBar";
import FullCalendarDemo from "./Components/FullCalendarDemo";
import SideBar from "./Components/SideBar";
class Main extends Component {
  constructor() {
    super();
    this.state = {};

    this.state = {
      visibleLeft: true
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      visibleLeft: !this.state.visibleLeft
    });
  }
  render() {
    return (
      <div>
        <ToolBarcustom
          onButtonClick={this.onButtonClick}
        />
        <SideBar visibleLeft={this.state.visibleLeft} hide = {this.onButtonClick}/>
        <FullCalendarDemo />
      </div>
    );
  }
}

export default Main;
