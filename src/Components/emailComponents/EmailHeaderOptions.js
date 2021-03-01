import React from "react";

function EmailHeaderOptions({ Icon, title, color, selected, onClickHandler }) {
  return (
    <div
      className="email__list__header"
      style={{
        color: color,
        borderBottom: `${selected && `3px solid ${color}`}`,
      }}
      onClick={onClickHandler}>
      <div className={`email__list__header_option`}>
        <Icon />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default EmailHeaderOptions;
