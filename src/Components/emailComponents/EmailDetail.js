import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchEmails, getEmailDetail } from "../../actions/emailActions";
import axiosInstance from "../../utility/axiosInstance";

function EmailDetail(props) {
  const dispatch = useDispatch();
  const mailDetail = useSelector((state) => state.emails.mailDetail);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getEmailDetail(id));
  }, []);

  return (
    <div className="email__detail">
      <div className="email__detail__header">
        <h1>{mailDetail?.title}</h1>
        <h2>{mailDetail?.subject}</h2>
        <h2>{mailDetail?.description}</h2>
        <h3>{mailDetail?.time}</h3>
      </div>
    </div>
  );
}

export default EmailDetail;
