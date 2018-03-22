// @flow
import React, { Component } from "react";
// import Auth from "../modules/auth/container";

// import { connect } from "react-redux";
import { helloWorld } from "./../modules/auth/state";
import { connect } from "react-redux";
import Questionnaire from "./../modules/questionnaire/view";
import SimpleHeader from "../layouts/SimpleHeader";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import AssetAllocation from "./../modules/assetAllocation/view";
import Main from "./../modules/Main";

class App extends Component<any, any> {
  // state = {
  //   userName: "",
  //   passWord: ""
  // };

  componentWillMount() {
    // axios.get("testApi").then(res => console.log("res", res));
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      <div>
        <SimpleHeader />
        <Container xAlign="center">
          <div
            style={{
              maxWidth: "600px",
              minWidth: "600px",
              paddingTop: spacing.space5
            }}
          >
            <Main />
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(null, {
  helloWorld
})(App);
