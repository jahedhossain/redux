import React, { useState } from "react";
import { connect } from "react-redux";

function InputText({ inputName }) {
  const [newName, setNewName] = useState("");

  const newUserName = (e) => {
    setNewName(e.target.value);
  };

  const handleAddName = () => {
    inputName(newName);
  };

  return (
    <>
      <input type="text" onChange={newUserName} />
      <button onClick={handleAddName}> add</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputName: (inputName) => {
      dispatch({ type: "NEW_USER_NAME", payload: inputName });
    },
  };
};

export default connect(null, mapDispatchToProps)(InputText);
