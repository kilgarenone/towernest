// @flow
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { css } from "react-emotion";
import "./App.css";
// import Button from "./components/Button";
import ICONS from "./styles/base/icons";
import Icon from "./components/Icon";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Container from "./components/Container";
import spacing from "./styles/base/spacing";
import store from "./redux/configureStore";
import { searchForTicker } from "./redux/tickerLookup";

const LookupTickerByNameBase = ({
  dispatch,
  ticker,
  value,
  handleSearchInputs
}) => (
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
          {ticker}
        </span>
        <Container marginLeft={spacing.space5} width="100%">
          <Input
            value={value}
            onChange={e => {
              handleSearchInputs(e);
              dispatch(searchForTicker(e.target.value));
            }}
          />
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

const mapStateToProps = state => ({ ticker: state.tickerLookupReducer });

const LookupTickerByName = connect(mapStateToProps)(LookupTickerByNameBase);

class App extends Component {
  state = {
    searchInputs: ""
  };

  handleSearchInputs = e => {
    console.log(this.state.searchInputs);
    this.setState({ searchInputs: e.target.value });
  };

  render() {
    return (
      <Provider store={store}>
        <LookupTickerByName
          value={this.state.searchInputs}
          handleSearchInputs={this.handleSearchInputs}
        />
      </Provider>
    );
  }
}

export default App;
