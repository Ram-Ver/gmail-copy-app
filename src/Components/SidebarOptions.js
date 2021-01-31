import React from "react";
import { Avatar } from "@material-ui/core";

function SidebarOptions({ color, Icon, title, number, selected, avatar }) {
  return (
    <div className={`sidebar__option `}>
      {Icon && <Icon />}
      {avatar && <Avatar />}
      <h3>{title}</h3>

      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
