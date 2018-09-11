import React from "react";
import { css, cx } from "react-emotion";
import ErrorMsgField from "../../../components/ErrorMsgField";
import { List } from "../../../components/List";
import RadioButton from "../../../components/RadioButton";
import spacing from "../../../styles/spacing";

const listContainerCss = css`
  .questionItem {
    border-radius: 12px;
    color: #757575;

    &:hover {
      color: initial;
      background-color: #fbfbfc;
    }

    &.selected {
      color: initial;
      background-color: #eee;
    }
  }
`;

const radioBtnCss = css`
  padding: ${spacing.space2};
  cursor: pointer;
`;

function ListRadioBtns({
  field: { name, value, onChange },
  questions,
  ...props
}) {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <List className={listContainerCss}>
        {questions.map(question => (
          <li
            className={cx("questionItem", {
              selected: question.weight === +value
            })}
            key={question.weight}
          >
            <RadioButton
              className={radioBtnCss}
              handleChange={onChange}
              name={name}
              value={question.weight}
              isChecked={question.weight === +value}
              {...props}
            >
              {question.value}
            </RadioButton>
          </li>
        ))}
      </List>
      <ErrorMsgField
        className={css`
          left: ${spacing.space0};
        `}
        htmlFor="questionnaire-forms"
        name={name}
      />
    </div>
  );
}

export default ListRadioBtns;
