import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utility/axiosInstance";

function EmailDetail() {
  const [emailDetail, setEmailDetail] = useState();
  const EmailID = useSelector((state) => state.email.EmailRowID);
  useEffect(() => {
    axiosInstance
      .get(`/emails/${EmailID}`)
      .then((response) => setEmailDetail(response.data));
  }, []);
  console.log(emailDetail);
  return (
    <div className="email__detail">
      <div className="email__detail__header">
        <h1>{emailDetail?.title}</h1>
        <h2>{emailDetail?.subject}</h2>
        <h2>{emailDetail?.description}</h2>
        <h3>{emailDetail?.time}</h3>
      </div>
    </div>
  );
}

export default EmailDetail;
