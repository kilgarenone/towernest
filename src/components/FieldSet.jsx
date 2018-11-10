import React from "react";
import styled from "react-emotion";
import spacing from "../css/spacing";
import { fontSize } from "../css/typography";

const FieldSetBase = styled("fieldset")`
  border: 1px solid #9e9e9e;
  border-radius: 8px;
`;

const Legend = styled("legend")`
  font-size: ${fontSize.textL};
  font-weight: 500;
  padding: ${spacing.space0};
`;

function FieldSet({ children, legend, ...props }) {
  return (
    <FieldSetBase {...props}>
      <Legend>{legend}</Legend>
      {children}
    </FieldSetBase>
  );
}

export default FieldSet;
