// @flow
import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import Input from "./Input";
import Icon from "./Icon";
import ICONS from "./../styles/base/icons";
import {
  getTicker,
  getStockDetails,
  getTickerByExchangeSelector
} from "../redux/tickerLookup";
import Container from "./Container";
import { List, ListItem } from "./List";

class LookupTickerByName extends Component {
  state = {
    searchInputs: ""
  };

  handleSearchInputs = e => {
    console.log(this.state.searchInputs);
    this.setState({ searchInputs: e.target.value });
    this.props.getTicker(e.target.value);
  };

  handlerGetStockDetailsByTicker = item => {
    console.log("hahaha", item);
    // this.props.getStockDetails(item.code);
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
              position: absolute;
              right: 5px;
              top: 15px;
            `}
          >
            <Icon icon={ICONS.SEARCH} />
          </span>
        </Container>
        <List className={styles.tickers}>
          {this.props.tickers.map((ticker, index) => (
            <ListItem
              item={ticker}
              onItemClick={this.handlerGetStockDetailsByTicker}
              key={index} // eslint-disable-line react/no-array-index-key
              tabIndex={index}
            >
              {ticker.name}
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

const styles = {
  tickers: css`
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
  `
};
const mapStateToProps = state => ({
  tickers: getTickerByExchangeSelector(state)
});

const mapDispatchToProps = { getTicker, getStockDetails };

export default connect(mapStateToProps, mapDispatchToProps)(LookupTickerByName);
