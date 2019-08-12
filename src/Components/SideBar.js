import React, { Component } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
class SideBar extends Component {
  render() {
    return (
      <div className="content-section implementation">
        <Sidebar
          visible={this.props.visibleLeft}
          baseZIndex={1000000}
          onHide={this.props.hide}
        >
          <h1 style={{ fontWeight: "normal" }}>Left Sidebar</h1>
          <Button
            type="button"
            onClick={this.props.hide}
            label="Save"
            className="p-button-success"
            style={{ marginRight: ".25em" }}
          />
          <Button
            type="button"
            onClick={this.props.hide}
            label="Cancel"
            className="p-button-secondary"
          />
        </Sidebar>{" "}
      </div>
    );
  }
}

export default SideBar;
