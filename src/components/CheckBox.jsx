// @flow
import * as React from "react";
import { css } from "react-emotion";
import Input from "./Input";
import spacing from "../styles/spacing";
import { fontSize } from "../styles/typography";
import Icon from "./Icon";
import ICONS from "../styles/icons";
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
  border: 2px solid #aaa;
  border-radius: 5px;
  height: 1.5em;
  width: 1.5em;
`;

const cssCheckBox = css`
  font-size: ${fontSize.text};
  display: flex;
  margin-bottom: ${spacing.space2};

  input {
    display: none;
  }

  &:hover {
    /* .container {
      // TODO: Fix the removed 'container' hook classname
      border-color: #777;
    } */
    .icon {
      opacity: 0.14;
    }
  }

  .icon {
    opacity: 0.06;
  }

  input:checked + div {
    background-color: #5245c2;
    border-color: transparent !important;
    & > .icon {
      opacity: 1;
      color: #fff;
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
        <Icon size="23" icon={ICONS.CHECKBOX} />
      </Container>
      {children}
    </label>
  );
}

CheckBox.defaultProps = {
  required: true
};

export default CheckBox;
