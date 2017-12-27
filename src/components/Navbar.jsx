// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import spacing from "./../styles/base/spacing";
import { colors } from "./../styles/base/colors";

type Props = {
  children: React.Node
};

const Navbar = (props: Props) => (
  <header className={css(styles.header)} role="banner">
    <div className={css(styles.headerContainer)}>{props.children}</div>
  </header>
);

export default Navbar;

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: spacing.space1,
    paddingRight: spacing.space1,
    // maxWidth: "1012px", // todo: convert to rem using postcss
    marginRight: "auto",
    marginLeft: "auto",
    "@media only screen and (min-width: 1140px)": {
      width: "1140px"
    }
  },
  header: {
    paddingTop: spacing.space1,
    paddingBottom: spacing.space1,
    color: colors.textOnDarkBg
  }
});
