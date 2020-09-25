import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr />
        <ItemContainer cake />
        <ItemContainer />

        <NewCakeContainer />
        <hr />
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
