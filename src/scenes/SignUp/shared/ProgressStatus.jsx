import React from "react";
import { css } from "react-emotion";
import ProgressBar from "../../../components/ProgressBar";
import spacing from "../../../styles/spacing";
import Container from "../../../components/Container";

const STEPS = [
  "Account",
  "Risk Profile",
  "Preview Portfolio",
  "Funding",
  "Submit",
];

function ProgressStatus({ width = 75 }) {
  return (
    <div
      className={css`
        flex: 1 1 auto;
      `}
    >
      <Container
        xAlign="space-between"
        className={css`
          margin: 0 ${spacing.space0};
        `}
      >
        {STEPS.map((step, index, arr) => {
          const interval = 100 / (arr.length - 1);
          const normalizedWidth = interval * index;

          return (
            <div
              key={step}
              className={
                width >= normalizedWidth && width < normalizedWidth + interval
                  ? css`
                      font-weight: 900;
                    `
                  : undefined
              }
            >
              {step}
            </div>
          );
        })}
      </Container>
      <ProgressBar width={width} />
    </div>
  );
}

export default ProgressStatus;