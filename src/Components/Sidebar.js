import { Button } from "@material-ui/core";
import { Chat, InboxOutlined } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import SidebarOptions from "./SidebarOptions";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { showSentBox } from "../actions/otherActions";
import { useHistory } from "react-router-dom";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ChatIcon from "@material-ui/icons/Chat";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MailIcon from "@material-ui/icons/Mail";
import ReportIcon from "@material-ui/icons/Report";

function Sidebar({ path }) {
  const emails = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  const history = useHistory();

  const composeHandler = () => {
    dispatch(showSentBox(true));
  };

  const sentComponentSelectHandler = (componentPath) => {
    history.push(componentPath);
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
  return (
    <div className="sidebar">
      <Button onClick={composeHandler}>
        <AddIcon />
        Compose
      </Button>
      <div className="sidebar__options__Container">
        <SidebarOptions
          Icon={InboxOutlined}
          title={"inbox"}
          number={inbox.length}
          color={"red"}
          selected={true}
          path={`${path}/inbox`}
        />
        <SidebarOptions
          Icon={StarBorderIcon}
          title={"Stared"}
          number={stared.length}
          color={"red"}
          selected={true}
          path={`${path}/stared`}
        />
        <SidebarOptions
          Icon={SnoozeIcon}
          title={"Snoozed"}
          number={snoozed.length}
          color={"red"}
          selected={true}
          path={`${path}/snoozed`}
        />
        <SidebarOptions
          Icon={SendIcon}
          title={"Sent"}
          number={sent.length}
          color={"red"}
          selected={true}
          path={`${path}/sent`}
        />
        <SidebarOptions
          Icon={DraftsIcon}
          title={"Draft"}
          number={draft.length}
          color={"red"}
          selected={true}
          path={`${path}/draft`}
        />
        <SidebarOptions
          Icon={LabelImportantIcon}
          title={"Important"}
          number={important.length}
          color={"red"}
          selected={true}
          path={`${path}/important`}
        />
        <SidebarOptions
          Icon={ChatIcon}
          title={"Chat"}
          number={0}
          color={"red"}
          selected={true}
          path={`${path}/chat`}
        />
        <SidebarOptions
          Icon={ScheduleIcon}
          title={"Schedulded"}
          number={sheduled.length}
          color={"red"}
          selected={true}
          path={`${path}/sheduled`}
        />
        <SidebarOptions
          Icon={MailIcon}
          title={"All Mails"}
          number={allEmails.length}
          color={"red"}
          selected={true}
          path={`${path}/allmails`}
        />
        <SidebarOptions
          Icon={ReportIcon}
          title={"Spam"}
          number={spam.length}
          color={"red"}
          selected={true}
          path={`${path}/spam`}
        />
      </div>
      <div className="sidebar__Meet">
        <h3>Meet</h3>
        <div className="meet__options">
          <SidebarOptions
            Icon={VideocamIcon}
            title={"New meeting"}
            color={"red"}
          />
          <SidebarOptions
            Icon={KeyboardIcon}
            title={"Join meeting"}
            color={"red"}
          />
        </div>
      </div>
      <div className="sidebar__Hangouts">
        <h3>Hangouts</h3>
        <div className="hangouts__options">
          <SidebarOptions avatar={true} title={"Ram"} color={"red"} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
