import React, { Component } from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";

class EnsureLoggedInContainer extends Component {
  componentDidMount() {
    const { isLoggedIn } = this.props;

    // if (!isLoggedIn) {
    // }
  }

  // TODO: Handle invalid auth that occured somewhere
  // componentDidUpdate() {
  //   history.
  // }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    }
    console.log("redirecting");
    return (
      <Redirect
        to={{
          pathname: "/login"
          // state: { from: props.location }
        }}
      />
    );
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.userAuth.accessToken
    // currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);
