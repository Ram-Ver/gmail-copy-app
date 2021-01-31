import { Checkbox } from "@material-ui/core";
import React from "react";

function EmailRow({ Icon, title, subject, description, time }) {
  return (
    <div className="email__row">
      <div className="email__row__left__section">
        <Checkbox />
        <Icon />
        <h3>{title}</h3>
      </div>

      <h3>{subject}</h3>
      <p>{description}</p>
      {time}
    </div>
  );
}

export default EmailRow;
