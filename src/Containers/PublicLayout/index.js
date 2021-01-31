import React from "react";
import gmailLogoImg from "../../assets/images/Gmail-logo.png";

function PublicLayout() {
  return (
    <div className="public__layout">
      <div className="login__header">
        <img src={gmailLogoImg} alt="gmail" />
      </div>
    </div>
  );
}

export default PublicLayout;
