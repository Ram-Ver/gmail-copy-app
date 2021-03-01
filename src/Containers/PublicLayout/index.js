import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import gmailLogoImg from "../../assets/images/Gmail-logo.png";
import { login } from "../../actions/userAction";

function PublicLayout() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    if (userName === "ram" && password === "123") {
      dispatch(login());
      history.push("/admin");
    } else if (userName === "" || password === "") {
      alert("email/phone or password  not allowed to be empty");
    } else {
      alert("please check your email/phone or password or not to be empty");
    }
  };
  return (
    <div className="public__layout">
      <div className="login__header">
        <img src={gmailLogoImg} alt="gmail" />
        <h1>One Account all of google</h1>
        <h2>Sign in to continue to Gmail</h2>
        <div className="login__feild">
          <form onSubmit={loginHandler}>
            <Avatar className="login__feild__avatar" />
            <input
              type="text"
              placeholder="Phone or Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign-Up</button>
          </form>
        </div>
        <Link to="/create-an-account">Create an account ? </Link>
      </div>
    </div>
  );
}

export default PublicLayout;
