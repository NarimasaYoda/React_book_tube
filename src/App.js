import React from "react";

import "./App.css";

import App_book from "./App_book";
import App_data from "./App_data";
import App_Tube from "./App_Tube";
import App_RadioButton from "./App_RadioButton"


const App = () => {
  return (
    <div className="App">
      {/* <App_data /> */}
      <App_book />
      <App_Tube/>
      <App_RadioButton />
      

    </div>
  )
};

export default App;
