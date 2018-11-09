import * as React from "react";
import { css, cx } from "react-emotion";
import { fontSize } from "../styles/typography";
import spacing from "../styles/spacing";
import Input from "./Input";

// type Props = {
//   name: string,
//   value: any,
//   required?: boolean,
//   children: any | React.Node,
//   onChange: (value: any) => any | void,
//   isChecked: boolean
// };

const cssRadioButton = css`
  font-size: ${fontSize.text};

  .label {
    cursor: pointer;
    border-radius: 12px;
    color: #757575;
    display: flex;
    align-items: center;
  }

  .radioDot {
    opacity: 0.06;
  }

  .radioOutline {
    opacity: 0.55;
  }

  .text {
    margin-left: ${spacing.space0};
  }

  .input {
    opacity: 0;
    position: absolute;

    &:focus,
    &:hover {
      & + .label {
        color: initial;
        background-color: #fbfbfc;

        .radioDot {
          opacity: 0.13;
        }

        .radioOutline {
          opacity: 0.7;
        }
      }
    }

    &:checked + .label {
      color: initial;
      background-color: #eee;

      .radioDot,
      .radioOutline {
        opacity: 1;
      }
    }
  }
`;

function RadioButton({
  name,
  value,
  required,
  children,
  isChecked,
  handleChange,
  className,
  ...props
}) {
  return (
    <div className={cssRadioButton}>
      <Input
        className="input"
        id={value}
        name={name}
        value={value}
        required={required}
        type="radio"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <label className={cx("label", className)} htmlFor={value}>
        <svg
          className="svg"
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
          height="30"
          width="30"
          viewBox="0 0 30 30"
        >
          <circle
            className="radioOutline"
            cx="15"
            cy="15"
            r="13"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <circle className="radioDot" cx="15" cy="15" r="6" fill="#000" />
        </svg>
        <span className="text">{children}</span>
      </label>
    </div>
  );
}

RadioButton.defaultProps = {
  required: true
};

export default RadioButton;
