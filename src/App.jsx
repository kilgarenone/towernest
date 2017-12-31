// @flow
import * as React from "react";
import "./App.css";
import Button from "./components/Button";
import ICONS from "./styles/base/icons";
import Icon from "./components/Icon";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

const App = () => (
  <div className="App">
    <NavBar>
      <Wrapper yAlign="center">
        <Icon icon={ICONS.BUBBLE} />
        <Wrapper>
          <Input type="email" />
          <Button secondary onClick={() => console.log("hahahah")}>
            Hellow wold!!!
          </Button>
        </Wrapper>
      </Wrapper>
      <div />
    </NavBar>
  </div>
);

export default App;
