import React from "react";
import { css } from "react-emotion";
import Heading from "../../../components/Heading";
import { marginBottom3 } from "../../../css/utilities";
import SubText from "../../../components/SubText";

function SignUpHeader({ title, desc }) {
  return (
    <div
      className={css`
        max-width: 30em;
        ${marginBottom3};
      `}
    >
      <Heading isSerifFont tag="h2">
        {title}
      </Heading>
      <SubText isNormalText>{desc}</SubText>
    </div>
  );
}

export default SignUpHeader;
