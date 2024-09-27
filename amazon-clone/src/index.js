import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import { DataProvider } from "./Components/DataProvider/DataProvider";
// import reducer ,{initialState } from './reducer'
import { StateProvider } from "./Components/DataProvider/DataProvider";
import reducer, { initialState } from "./Utility/reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <DataProvider initialState={initialState} reducer={reducer}> */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>

    {/* </DataProvider> */}
  </React.StrictMode>
);
