import React from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import EmailContainer from "../EmailSection/EmailContainer";

function PrivateLayout() {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <EmailContainer />
      </div>
    </div>
  );
}

export default PrivateLayout;
