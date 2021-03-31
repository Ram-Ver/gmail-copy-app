import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import gmailLogoImg from "../assets/images/Gmail-logo.png";
import { fetchUsers } from "../actions/userAction";
import { toast } from "react-toastify";

function Login() {
  const [userLoginDetail, setUserLoginDetail] = useState({
    username: "",
    password: "",
  });
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const singleUser = users.find(
      (userdata) =>
        userdata.email === username && userdata.password === password
    );
    if (username === singleUser?.email && password === singleUser?.password) {
      history.push("/admin/inbox");
      localStorage.setItem("login", "true");
    } else if (username === "" || password === "") {
      toast.error("email/phone or password  not allowed to be empty");
    } else {
      toast.error("Invalid email/phone or passowrd");
    }
    setUserLoginDetail({ username: "", password: "" });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserLoginDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { username, password } = userLoginDetail;
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
              value={username}
              name="username"
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={onChangeHandler}
            />
            <button type="submit">Sign-Up</button>
          </form>
        </div>
        <Link to="/create-an-account">Create an account ? </Link>
      </div>
    </div>
  );
}

export default Login;
