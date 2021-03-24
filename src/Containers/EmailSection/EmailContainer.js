import {
  Checkbox,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import EmailHeaderOptions from "../../Components/emailComponents/EmailHeaderOptions";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxOutlined from "@material-ui/icons/InboxOutlined";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../utility/axiosInstance";
import { deleteEmail, fetchEmails } from "../../actions/emailActions";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { DeleteForeverOutlined, StarBorder } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import {
  Inbox,
  Sent,
  Stared,
  Snoozed,
  Draft,
  Primary,
  Promotion,
  Social,
  Important,
  Chat,
  Sheduled,
  AllMails,
  Spam,
} from "../pages";
import EmailDetail from "../../Components/emailComponents/EmailDetail";

function EmailContainer(props) {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const dropdownRef = useRef(null);
  const emails = useSelector((state) => state.emails);
  const path = props.path;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmails());
  }, []);

  const deleteEmailHandler = (id) => {
    console.log(id, "id");
    axiosInstance.delete(`/emails/${id}`);
    dispatch(deleteEmail(id));
    toast.success("Deleted Successfully");
  };

  const {
    allEmails,
    inbox,
    sent,
    stared,
    snoozed,
    draft,
    sheduled,
    important,
    spam,
    promotion,
    primary,
    social,
  } = emails;

  const handleClick = () => {
    setIsOpenCart(!isOpenCart);
  };
  const handleClose = () => {
    setIsOpenCart(!isOpenCart);
  };
  return (
    <div className="email__Container">
      <div className="email__tools__header">
        <div className="email__tools__left">
          <Button>
            <Checkbox />
            <ArrowDropDownIcon
              ref={dropdownRef}
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
          </Button>
          <Menu
            id="dropdown-menu"
            anchorEl={dropdownRef.current}
            keepMounted
            open={isOpenCart}
            onClose={handleClose}>
            <MenuItem>All</MenuItem>
            <MenuItem>None</MenuItem>
            <MenuItem>Read</MenuItem>
            <MenuItem>Unread</MenuItem>
            <MenuItem>Stared</MenuItem>
            <MenuItem>Unstared</MenuItem>
          </Menu>
          {/* <IconButton>
          </IconButton> */}
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email__tools__right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className="email__header__options">
        <EmailHeaderOptions
          Icon={InboxOutlined}
          number={primary.length}
          title="Primary"
          color="red"
          selected={false}
          path={"/admin/primary"}
        />
        <EmailHeaderOptions
          Icon={PeopleIcon}
          number={social.length}
          title="Social"
          color="blue"
          selected={false}
          path={"/admin/social"}
        />
        <EmailHeaderOptions
          Icon={LocalOfferIcon}
          number={promotion.length}
          title="Promotions"
          color="green"
          selected={false}
          path={"/admin/promotion"}
        />
      </div>
      <div className="email__list">
        <div className="email__row__container">
          <Switch>
            <Route
              exact
              path={`${props.path}/inbox`}
              component={() => <Inbox data={inbox} />}
            />
            <Route
              exact
              path={`${path}/stared`}
              component={() => <Stared data={stared} />}
            />
            <Route
              exact
              path={`${path}/sent`}
              component={() => <Sent data={sent} />}
            />
            <Route
              exact
              path={`${path}/snoozed`}
              component={() => <Snoozed data={snoozed} />}
            />
            <Route
              exact
              path={`${path}/draft`}
              component={() => <Draft data={draft} />}
            />
            <Route
              exact
              path={`${path}/important`}
              component={() => <Important data={important} />}
            />

            <Route exact path={`${path}/chat`} component={() => <Chat />} />

            <Route
              exact
              path={`${path}/sheduled`}
              component={() => <Sheduled data={sheduled} />}
            />

            <Route
              exact
              path={`${path}/allmails`}
              component={() => <AllMails data={allEmails} />}
            />

            <Route
              exact
              path={`${path}/spam`}
              component={() => <Spam data={spam} />}
            />

            <Route
              exact
              path={`${path}/promotion`}
              component={() => <Promotion data={promotion} />}
            />
            <Route
              exact
              path={`${path}/primary`}
              component={() => <Primary data={primary} />}
            />
            <Route
              exact
              path={`${path}/social`}
              component={() => <Social data={social} />}
            />
            <Route
              exact
              path={`${path}/detail`}
              component={() => <EmailDetail />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default EmailContainer;
