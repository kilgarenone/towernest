import React, { Fragment } from "react";
import Input from "../../components/Input";

function SignInFields({ handleChange, userName, passWord }) {
  return (
    <Fragment>
      <label htmlFor="userName">
        Name:
        <Input name="userName" value={userName} onChange={handleChange} />
      </label>
      <label htmlFor="passWord">
        Password:
        <Input
          type="password"
          name="passWord"
          value={passWord}
          onChange={handleChange}
        />
      </label>
    </Fragment>
  );
}

export default SignInFields;
