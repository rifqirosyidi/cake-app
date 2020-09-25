import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceContainer />
      </div>
    </Provider>
  );
}

export default App;
