import React from "react";

function EmailHeaderOptions({ Icon, title, color, selected }) {
  return (
    <div className="email__list__header">
      <div style={{ color: color }} className={`email__list__header_option`}>
        <Icon />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default EmailHeaderOptions;
