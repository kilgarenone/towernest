// @flow
import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import onClickOutside from "react-onclickoutside";
import Input from "./Input";
import Icon from "./Icon";
import ICONS from "./../styles/base/icons";
import { getTicker, getTickerByExchangeSelector } from "../redux/tickerLookup";
import { getStockDetails } from "../redux/viewStocks";
import Container from "./Container";
import { List, ListItem } from "./List";

class LookupTickerByName extends Component<any, any> {
  state = {
    searchInputs: "",
    isAutoCompletePanelOpen: false
  };

  handleSearchInputs = e => {
    this.setState({ searchInputs: e.target.value });
    this.props.getTicker(e.target.value);
  };

  handlerGetStockDetailsByTicker = item => {
    console.log("itemsss", item);
    this.props.getStockDetails(item.symbol);
    this.toggleAutoCompletePanel();
  };

  toggleAutoCompletePanel = () => {
    this.setState({
      isAutoCompletePanelOpen: !this.state.isAutoCompletePanelOpen
    });
  };

  handleClickOutside = () => {
    if (this.state.isAutoCompletePanelOpen) {
      this.toggleAutoCompletePanel();
    }
  };

  render() {
    return (
      <Container direction="column">
        <Container>
          <Input
            value={this.state.searchInputs}
            onChange={this.handleSearchInputs}
            onFocus={this.toggleAutoCompletePanel}
          />
          <span className={styles.input}>
            <Icon icon={ICONS.SEARCH} />
          </span>
        </Container>
        {this.state.isAutoCompletePanelOpen && (
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
        )}
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
  `,
  input: css`
    position: absolute;
    right: 5px;
    top: 15px;
  `
};

const mapStateToProps = state => ({
  tickers: getTickerByExchangeSelector(state)
});

const mapDispatchToProps = { getTicker, getStockDetails };

export default connect(mapStateToProps, mapDispatchToProps)(
  onClickOutside(LookupTickerByName)
);
