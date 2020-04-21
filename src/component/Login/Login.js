import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { loginSubmit } from "../../redux/actions/loginActions";

function Login({ loginSubmit }) {
  const [formValue, setformValue] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginSubmit(formValue);
  };

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email Address"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (data) => dispatch(loginSubmit(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
