import React, { Component } from "react";
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createProfileDocument } from "../../../firebase/firebase.utils";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="title">
          <h1>I don't have an account.</h1>
          <span>Please enter your email and password in the form below:</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type="text"
            value={this.state.displayName}
            name="displayName"
            label="Display Name"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
            name="email"
            required
            label="Email"
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            required
            label="password"
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            required
            label="Confirm Password"
          />
          <div className="buttons">
            <CustomButton type="submit" value="Sign-in">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
