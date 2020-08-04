import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import Header from "./components/header/header.component.jsx";
import AuthStuff from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/sign-in" component={AuthStuff}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
