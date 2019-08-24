import React from "react";
import Main from "./Components/Main";
import Topbar from "./Components/Topbar";
import "./App.scss";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Main />
    </React.Fragment>
  );
}

export default App;
