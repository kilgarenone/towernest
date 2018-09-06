import React from "react";
import styled from "react-emotion";
import { fontSize } from "../styles/base/typography";

const FieldSetBase = styled("fieldset")`
  border: 1px solid #e1e1e1;
`;

const Legend = styled("legend")`
  font-size: ${fontSize.textL};
  font-weight: 500;
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
