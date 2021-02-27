import React from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import EmailContainer from "../EmailSection/EmailContainer";
import { useSelector } from "react-redux";
import SentEmail from "../SentEmail/sentEmail";
import { Modal } from "@material-ui/core";

function PrivateLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [sentBox, setSentBox] = useState(false);
  const user = useSelector((state) => state.user);

  const sidebarHandler = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const modalHandler = () => {
    setSentBox(!sentBox);
  };

 
  return (
    <div>
      <Header sidebarHandler={sidebarHandler} />
      <div className="app__body">
        {isOpenSidebar ? (
          <Sidebar isOpenSidebar={isOpenSidebar} modalHandler={modalHandler} />
        ) : null}
        <EmailContainer />
        <SentEmail  />
      </div>
    </div>
  );
}

export default PrivateLayout;
