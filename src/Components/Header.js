import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/action";

function Header({ sidebarHandler }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user, "useeer");
  }, [user]);

  const logoutHandler = () => {
    dispatch(login(false));
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton
          onClick={() => {
            sidebarHandler();
          }}>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="logo"
        />
      </div>
      <div className="header__middle">
        <div className="header__searchbar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src={user.userProfile} />

        <p
          style={{ marginLeft: "10px", cursor: "pointer" }}
          onClick={logoutHandler}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default Header;
