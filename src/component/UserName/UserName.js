import React from "react";
import { connect } from "react-redux";

function UserName(props) {
  return (
    <div>
      <ul>
        {props.userName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userNameReducers.userName,
  };
};

export default connect(mapStateToProps, null)(UserName);
