import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import gmailLogoImg from "../../assets/images/Gmail-logo.png";
import { login } from "../../actions/action/index";



function PublicLayout() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(true));
    console.log(user, "userreducer");
    if (userName === "ram@gmail.com" && password === "123456") {
      history.push("/admin");
    } else {
      alert("please check your email/phone or password");
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
        <a href="#">Create an account ? </a>
      </div>
    </div>
  );
}

export default PublicLayout;
