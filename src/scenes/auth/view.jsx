import React, { Fragment } from "react";
import Input from "../../components/Input";

function SignIn({ handleChange, userName, passWord }) {
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

export default SignIn;
