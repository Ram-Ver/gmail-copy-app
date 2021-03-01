import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { useHistory } from "react-router-dom";


function Header({ sidebarToggleHandler }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
  }, [user]);

  const logoutHandler = () => {
    dispatch(login(false));
    history.push("/")
    setAnchorEl(null);

  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={sidebarToggleHandler}>
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
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}>
          <HelpOutlineIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>Help</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src={user.userProfile} />
      </div>
    </div>
  );
}

export default Header;
