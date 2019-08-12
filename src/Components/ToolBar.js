import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import React from "react";
import "../Layouts/Main.scss";

class ToolBarcustom extends React.Component {
  render() {
    return (
      <Toolbar>
        <div className="topToolBar p-toolbar">
          <Button icon="pi pi-bars" onClick={this.props.onButtonClick} />
        </div>
      </Toolbar>
    );
  }
}
export default ToolBarcustom;
