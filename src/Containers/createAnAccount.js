import React from "react";
import { useHistory } from "react-router-dom";

function CreateAnAccount() {
  const history = useHistory();
  const backButtonHandler = () => {
    history.push("/");
  };
  return (
    <div className="create__an__account">
      <div className="create__an__account__body">
        <h1>Create An Account</h1>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button variant="contained" color="primary">
          Submit
        </button>
        <button onClick={backButtonHandler} variant="contained" color="primary">
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CreateAnAccount;
