import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: " ", password: " " });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="title">
          <h1>I already have an account</h1>
          <span>Please enter your email and password in the form below:</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
            name="email"
            required
            label="email"
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit" value="Sign-in">
              Sign In
            </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
