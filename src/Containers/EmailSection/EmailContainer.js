import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import EmailList from "./EmailList";
import EmailHeaderOptions from "./EmailHeaderOptions";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxOutlined from "@material-ui/icons/InboxOutlined";
import SentEmail from "../SentEmail/sentEmail";
function EmailContainer() {
  return (
    <div className="email__Container">
      <div className="email__tools__header">
        <div className="email__tools__left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
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
          title="Primary"
          color="red"
          selected={true}
        />
        <EmailHeaderOptions Icon={PeopleIcon} title="Social" color="blue" />
        <EmailHeaderOptions
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
        />
      </div>
      <EmailList />
    </div>
  );
}

export default EmailContainer;
