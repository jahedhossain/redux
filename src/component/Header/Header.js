import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { showLoginForm, handleLogOut } from "../../redux/actions/loginActions";

function Header({ showLoginForm, login, handleLogOut, userName }) {
  return (
    <div className="header">
      <div className="profile">
        <img
          src="https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg"
          alt=""
        />
      </div>
      <h5>{userName}</h5>
      <ul>
        {!login && <li onClick={showLoginForm}>Login</li>}
        {login && <li onClick={handleLogOut}>LogOut</li>}
      </ul>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    showLoginForm: () => dispatch(showLoginForm()),
    handleLogOut: () => dispatch(handleLogOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    login: state.loginReducers.login,
    userName: state.loginReducers.user.name,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
