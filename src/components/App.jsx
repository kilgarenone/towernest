// @flow
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { css } from "react-emotion";
// import Button from "./components/Button";
import ICONS from "../styles/base/icons";
import Icon from "../components/Icon";
import NavBar from "../components/Navbar";
import Input from "../components/Input";
import Container from "../components/Container";
import spacing from "../styles/base/spacing";
import { searchForTicker, getTickerByExchange } from "../redux/tickerLookup";
import configureStore from "../redux/configureStore";

const DisplayTickerCodesBase = ({ tickers }) => {
  if (!tickers.length) {
    return null;
  }
  return (
    <ul>{tickers.map(ticker => <li key={ticker.symbol}>{ticker.name}</li>)}</ul>
  );
};

export const DisplayTickerCodes = connect(state => ({
  tickers: getTickerByExchange(state)
}))(DisplayTickerCodesBase);

const LookupTickerByNameBase = ({ getTicker, value, handleSearchInputs }) => (
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
          {""}
        </span>
        <Container direction="column" marginLeft={spacing.space5} width="100%">
          <Container>
            <Input
              value={value}
              onChange={e => {
                handleSearchInputs(e);
                getTicker(e.target.value);
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
          <DisplayTickerCodes />
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

const mapDispatchToProps = { getTicker: searchForTicker };

const LookupTickerByName = connect(null, mapDispatchToProps)(
  LookupTickerByNameBase
);

const store = configureStore();

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
