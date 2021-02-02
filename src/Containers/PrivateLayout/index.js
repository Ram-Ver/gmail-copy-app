import React from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import EmailContainer from "../EmailSection/EmailContainer";

function PrivateLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header sidebarHandler={sidebarHandler} />
      <div className="app__body">
        {isOpen  ?  <Sidebar isOpen={isOpen} />  :  null}
        <EmailContainer />
      </div>
    </div>
  );
}

export default PrivateLayout;
