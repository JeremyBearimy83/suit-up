import React, { Component } from "react";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component.jsx";

import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";

import Checkout from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component.jsx";
import AuthStuff from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CategoryPage from "./pages/categoryPage/category-page.component.jsx";

import { auth, createProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/shop/:id" component={CategoryPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthStuff />
            }
          ></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ currentUser: selectCurrentUser(state) });
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
