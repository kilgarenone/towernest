// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import spacing from "../styles/base/spacing";

type Props = {
  children: React.Node
};

function Card(props: Props) {
  return <div className={css(styles.card)}>{props.children}</div>;
}

export default Card;

export const styles = StyleSheet.create({
  card: {
    padding: spacing.space4, // using spacing constants as padding
    background: "rgba(255, 255, 255, 1.0)",
    boxShadow: "0 3px 17px 2px rgba(0, 0, 0, .05)",
    borderRadius: "3px"
  }
});
