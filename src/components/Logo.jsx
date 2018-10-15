import React from "react";
import { css } from "react-emotion";

function Logo() {
  return (
    <a
      href="http://google.com"
      className={css`
        font-weight: 700;
        font-size: 27px;
        color: black;
      `}
    >
      towernest
    </a>
  );
}

export default Logo;
