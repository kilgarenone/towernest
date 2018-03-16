import React from "react";

function ErrorMsg({ text }) {
  return (
    <div className="validation-error">
      <span className="text">{text}</span>
    </div>
  );
}

export default ErrorMsg;
