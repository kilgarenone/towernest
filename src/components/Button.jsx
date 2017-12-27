// @flow
import React from "react";
// import { StyleSheet, css } from "aphrodite/no-important";

type Props = {
  type: string,
  text: string
  // primary: boolean
};

function Button(props: Props) {
  const { type = "button", text = " " } = props;

  return (
    <button
      type={type}
      // className={css(styles.button, primary && styles.primary)}
    >
      {text}
    </button>
  );
}

export default Button;

// const styles = StyleSheet.create({
//   button: {
//     fontSize: ".9rem",
//     background: "0 0",
//     borderRadius: "4px",
//     border: "none",
//     textAlign: "center",
//     lineHeight: 1.3,
//     cursor: "pointer",
//     letterSpacing: "normal",
//     color: "white",
//     textTransform: "uppercase",
//     padding: "19px 40px 20px",
//     display: "block",
//     flexBasis: "100%",
//     width: "100%"
//     // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
//   },
//   primary: {
//     backgroundColor: "black",
//     color: "#fff"
//   }
// });
