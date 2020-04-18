import React from "react";
import { connect } from "react-redux";
import { CHANGE_USER_INFO } from "../../redux/actions/userAction";

function Users(props) {
  console.log(props);
  return (
    <div className="Users">
      <h1> My all users</h1>
      <p> Name: {props.name}</p>
      <p> Age: {props.age}</p>
      <button onClick={() => props.changeInfo({ type: CHANGE_USER_INFO })}>
        Change info
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
