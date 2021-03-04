import React from "react";
import { useHistory } from "react-router-dom";

function EmailHeaderOptions({
  Icon,
  title,
  color,
  selected,
  path,
}) {
  const history = useHistory()
  return (
    <div
      className="email__list__header"
      style={{
        color: color,
        borderBottom: `${selected && `3px solid ${color}`}`,
      }}
      onClick={()  =>  history.push(path)}
      >
      <div className={`email__list__header_option`}>
        <Icon />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default EmailHeaderOptions;
