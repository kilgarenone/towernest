import React from "react";
import { css } from "react-emotion";
import { ErrorMessage } from "formik";
import { List } from "../../../../components/List";
import RadioButton from "../../../../components/RadioButton";
import spacing from "../../../../styles/spacing";
import ErrorMsg from "../../../../components/ErrorMsg";

const radioBtnCss = css`
  padding: ${spacing.space2};
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
      <List>
        {questions.map(question => (
          <li key={question.weight}>
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
      <ErrorMessage
        name={name}
        component={ErrorMsg}
        className={css`
          left: ${spacing.space0};
        `}
        htmlFor="questionnaire-forms"
      />
    </div>
  );
}

export default ListRadioBtns;
