import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import { connect } from "react-redux";
import Posts from "./component/Posts/Posts";

function App({ loginForm, login }) {
  return (
    <div className="App">
      <Header />
      {loginForm && <Login />}
      {login && <Posts />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginReducers.loginForm,
    login: state.loginReducers.login,
  };
};
export default connect(mapStateToProps, null)(App);
