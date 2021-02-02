import { IconButton } from "@material-ui/core";
import { InboxOutlined } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import SidebarOptions from "./SidebarOptions";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { useState } from "react";

function Sidebar({isOpen}) {

  return (
    <div className="sidebar" >
      <IconButton>
        <AddIcon />
        Compose
      </IconButton>
      <div className="sidebar__options__Container">
        
        <SidebarOptions
          Icon={InboxOutlined}
          title={"inbox"}
          number={54}
          color={"red"}
          selected={true}
        />
        <SidebarOptions
          Icon={StarBorderIcon}
          title={"Stared"}
          number={54}
          color={"red"}
          selected={true}
        />
        <SidebarOptions
          Icon={SnoozeIcon}
          title={"Snoozed"}
          number={54}
          color={"red"}
          selected={true}
        />
        <SidebarOptions
          Icon={SendIcon}
          title={"Sent"}
          number={54}
          color={"red"}
          selected={true}
        />
        <SidebarOptions
          Icon={DraftsIcon}
          title={"Draft"}
          number={54}
          color={"red"}
          selected={true}
        />
        <SidebarOptions
          Icon={ExpandMoreIcon}
          title={"More"}
          number={54}
          color={"red"}
          selected={true}
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
