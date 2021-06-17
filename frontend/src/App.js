import React, { Fragment } from "react";
import './App.css';

// components

import InputUserDetails from "./components/Input"
import ListOfEntries from "./components/List"


function App() {
  return ( <Fragment>
    <div className="container">
      <InputUserDetails/>
      <ListOfEntries/>
    </div>
  </Fragment>
  );
}

export default App;
