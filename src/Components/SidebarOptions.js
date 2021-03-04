import React from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function SidebarOptions({
  color,
  Icon,
  title,
  number,
  selected,
  avatar,
  path,
}) {
  const history = useHistory()
  return (
    <div className={`sidebar__option `} onClick={()  =>  history.push(path)}>
      {Icon && <Icon />}
      {avatar && <Avatar />}
      <h3>{title}</h3>

      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
