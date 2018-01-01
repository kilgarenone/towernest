// @flow
import * as React from "react";
import { css } from "react-emotion";
import "./App.css";
import Button from "./components/Button";
import ICONS from "./styles/base/icons";
import Icon from "./components/Icon";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Container from "./components/Container";
import spacing from "./styles/base/spacing";

const App = () => (
  <div className="App">
    <NavBar>
      <Container yAlign="center" width="60%">
        <span
          className={css`
            font-weight: 700;
            font-size: 27px;
            color: black;
          `}
        >
          Matisa
        </span>
        <Container marginLeft={spacing.space5} width="100%">
          <Input type="email" />
          <span
            className={css`
              position: relative;
              left: -35px;
              top: 15px;
            `}
          >
            <Icon icon={ICONS.SEARCH} />
          </span>
        </Container>
      </Container>
      <Container>
        {/* <Button secondary onClick={() => console.log("hahahah")}>
          Hellow wold!!!
        </Button> */}
      </Container>
    </NavBar>
  </div>
);

export default App;
