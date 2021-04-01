import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createAnAccount } from "../actions/appActions";

function CreateAnAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });
  const backButtonHandler = () => {
    history.push("/");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = () => {
    dispatch(createAnAccount(formData));
    toast.success("data submit successfully");
    history.push("/");
  };

  const { firstname, lastname, email, username, phone, password } = formData;
  return (
    <div className="create__an__account">
      <div className="create__an__account__body">
        <h1>Create An Account</h1>
        <input
          type="text"
          placeholder="Firstname"
          onChange={onChangeHandler}
          value={firstname}
          name="firstname"
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={onChangeHandler}
          value={lastname}
          name="lastname"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={onChangeHandler}
          value={email}
          name="email"
        />
        <input
          type="phone"
          placeholder="Phone"
          onChange={onChangeHandler}
          value={phone}
          name="phone"
        />
        <input
          type="text"
          placeholder="Username"
          onChange={onChangeHandler}
          value={username}
          name="username"
        />
        <input
          type="text"
          placeholder="Password"
          onChange={onChangeHandler}
          value={password}
          name="password"
        />

        <input type="file" accept="image/*" />
        <button onClick={onSubmitHandler}>Submit</button>
        <button onClick={backButtonHandler}>Go Back</button>
      </div>
    </div>
  );
}

export default CreateAnAccount;
