import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import survayStore from "./store";

import Survay from "./component/Survay";

function App() {
  return (
    <Provider store={survayStore()}>
      <Survay />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
