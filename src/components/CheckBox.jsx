// @flow
import * as React from "react";
import { css } from "react-emotion";
import Input from "./Input";
import spacing from "./../styles/base/spacing";
import { fontSize } from "./../styles/base/typography";
import Icon from "./Icon";
import ICONS from "./../styles/base/icons";
import Container from "./Container";

type Props = {
  name: string,
  value: any,
  required?: boolean,
  children: any | React.Node,
  onChange: (value: any) => any | void,
  isChecked: boolean
};

const cssCheckBoxContainer = css`
  flex-shrink: 0;
  transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0.2;
  border: 2px solid;
  border-radius: 20%;
`;

const cssCheckBox = css`
  font-size: ${fontSize.text};
  display: flex;
  margin-bottom: ${spacing.space2};

  input {
    display: none;
  }

  &:hover {
    .radioDot {
      opacity: 0.2;
    }
    .radioOutline {
      opacity: 0.3;
    }
  }

  .radioDot {
    opacity: 0.1;
  }

  .radioOutline {
    opacity: 0.2;
  }

  input:checked + svg {
    .radioDot,
    .radioOutline {
      opacity: 1;
    }
  }
`;

function CheckBox({
  name,
  value,
  required,
  children,
  isChecked,
  handleChange,
  ...props
}: Props) {
  return (
    <label className={cssCheckBox} htmlFor={`${name}-${value}`}>
      <Input
        id={`${name}-${value}`}
        name={name}
        value={value}
        required={required}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <Container
        className={cssCheckBoxContainer}
        xAlign="center"
        yAlign="center"
      >
        <Icon icon={ICONS.CHECKBOX} />
      </Container>
      {children}
    </label>
  );
}

CheckBox.defaultProps = {
  required: true
};

export default CheckBox;
