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
  const [isOpensentBox, setIsOpenSentBox] = useState(false);
  const user = useSelector((state) => state.user);

  const sidebarHandler = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const modalHandler = () => {
    setIsOpenSentBox(!isOpensentBox);
  };

 
  return (
    <div>
      <Header sidebarHandler={sidebarHandler} />
      <div className="app__body">
        {isOpenSidebar ? (
          <Sidebar isOpenSidebar={isOpenSidebar} modalHandler={modalHandler} />
        ) : null}
        <EmailContainer
          isOpensentBox={isOpensentBox}
          modalHandler={modalHandler}
        />
        {/* {isOpensentBox  ?  <SentEmail modalHandler={modalHandler} />  :  null} */}
      </div>

      {/* <Modal
        open={isOpensentBox}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}> */}
      {/* {isOpensentBox?<SentEmail modalHandler={modalHandler} />:null} */}
      {/* </Modal> */}
    </div>
  );
}

export default PrivateLayout;
