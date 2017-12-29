// @flow
import * as React from "react";
import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import ICONS from "./styles/base/icons";
import Icon from "./components/Icon";
import NavBar from "./components/Navbar";

const App = () => (
  <div className="App">
    <NavBar>
      <div>
        <Icon icon={ICONS.BUBBLE} />
      </div>
      <div>
        <Button secondary onClick={() => console.log("hahahah")}>
          Hellow wold!!!
        </Button>
        <span>sdsdsds908098</span>
        {/* <Heading tag="h1">Damn sont!!</Heading> */}
      </div>
    </NavBar>
  </div>
);

export default App;
