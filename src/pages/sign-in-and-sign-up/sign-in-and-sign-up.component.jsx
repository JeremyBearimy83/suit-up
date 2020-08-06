import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
const AuthStuff = () => {
  return (
    <div className="form">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default AuthStuff;
