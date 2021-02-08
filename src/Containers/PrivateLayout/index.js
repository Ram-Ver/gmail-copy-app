import React from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import EmailContainer from "../EmailSection/EmailContainer";
import { useSelector } from "react-redux";

function PrivateLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector((state) => state.user);

  const sidebarHandler = () => {
    setIsOpen(!isOpen);
  };


 
  return (
    <div>
      <Header sidebarHandler={sidebarHandler} />
      <div className="app__body">
        {isOpen ? <Sidebar isOpen={isOpen} /> : null}
        <EmailContainer />
      </div>

    </div>
  );
}

export default PrivateLayout;
