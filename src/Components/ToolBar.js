import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import React from "react";

class ToolBarcustom extends React.Component {
  render() {
    return (
      <Toolbar>
        <div className="p-toolbar-group-right">
          <Button icon="pi pi-search" style={{ marginRight: ".25em" }} />
          <Button
            icon="pi pi-calendar"
            className="p-button-success"
            style={{ marginRight: ".25em" }}
          />
          <Button icon="pi pi-times" className="p-button-danger" />
        </div>
      </Toolbar>
    );
  }
}
export default ToolBarcustom;
