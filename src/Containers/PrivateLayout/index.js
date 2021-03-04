import React from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import EmailContainer from "../EmailSection/EmailContainer";
import { useDispatch, useSelector } from "react-redux";
import SentEmail from "../EmailSection/SentEmail/sentEmail";
import { sidebartoggle } from "../../actions/otherActions";

function PrivateLayout(props) {
  const path = "/admin";
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarToggleHandler = () => {
    dispatch(sidebartoggle(!sidebar.isSidebarOpen));
  };

  return (
    <div className="private__layout">
      <Header sidebarToggleHandler={sidebarToggleHandler} />
      <div className="app__body">
        {sidebar.isSidebarOpen ? <Sidebar path={path} /> : null}
        <EmailContainer path={path} />
      </div>
      {sidebar.isSentBoxOpen ? <SentEmail /> : null}
    </div>
  );
}

export default PrivateLayout;
