 import React from 'react';
/*import logo from './logo.svg';
import './App.css';
 */
import {Toolbar} from 'primereact/toolbar';

export class ToolbarDemo extends Component {

  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <div>
              <div className="content-section">
                  <div className="feature-intro">
                      <h1>Toolbar</h1>
                      <p>Toolbar is a grouping component for buttons and other content.</p>
                  </div>
              </div>
              <div className="content-section implementation">
                  <Toolbar>
                      <div className="p-toolbar-group-left">
                          <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
                          <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                          <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                          <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                      </div>
                      <div className="p-toolbar-group-right">
                          <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                          <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                          <Button icon="pi pi-times" className="p-button-danger" />
                      </div>
                  </Toolbar>
              </div>

              <ToolbarDoc/>

          </div>
      );
  }
}

export default ToolbarDemo;
