import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import Input from "./Input";
import Icon from "./Icon";
import ICONS from "./../styles/base/icons";
import { searchForTicker, getTickerByExchange } from "../redux/tickerLookup";
import Container from "./Container";

class LookupTickerByName extends Component {
  state = {
    searchInputs: ""
  };

  handleSearchInputs = e => {
    console.log(this.state.searchInputs);
    this.setState({ searchInputs: e.target.value });
    this.props.getTicker(e.target.value);
  };

  render() {
    return (
      <Container direction="column">
        <Container>
          <Input
            value={this.state.searchInputs}
            onChange={this.handleSearchInputs}
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
        <ul>
          {this.props.tickers.map(ticker => (
            <li key={ticker.symbol}>{ticker.name}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tickers: getTickerByExchange(state)
});

const mapDispatchToProps = { getTicker: searchForTicker };

export default connect(mapStateToProps, mapDispatchToProps)(LookupTickerByName);
