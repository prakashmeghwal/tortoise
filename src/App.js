import React from "react";
import ToolBarcustom from "./Components/ToolBar";
import FullCalendarDemo from "./Components/FullCalendarDemo";
import "./App.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
function App() {
  return (
    <div className="App">
      <ToolBarcustom />
      <FullCalendarDemo />
    </div>
  );
}

export default App;
