import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, TextareaAutosize } from "@material-ui/core";
import { sentEmail } from "../../actions/emailActions";
import { useDispatch } from "react-redux";
import axiosInstance from "../../utility/axiosInstance";
import { hideSentBox } from "../../actions/otherActions";
import moment from "moment";

function SentEmail() {
  const [sentData, setSentData] = useState({
    title: "",
    subject: "",
    description: "",
  });

  const dispatch = useDispatch();
  const sentEmailHandler = () => {
    dispatch(sentEmail(sentData));
    setSentData({
      title: "",
      subject: "",
      description: "",
    });
    dispatch(hideSentBox(false));
    const time = moment().startOf("hour").fromNow();
    axiosInstance.post("/emails", { title, subject, description, time });
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSentData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sentBoxHandler = () => {
    dispatch(hideSentBox(false));
  };

  const { title, subject, description } = sentData;
  return (
    <div className="sent__email">
      <div className="sent__email__header">
        <h3>New Mail</h3>
        <IconButton onClick={sentBoxHandler}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="sent__email__body">
        <input
          type="text"
          placeholder="title"
          value={title}
          name="title"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="subject"
          placeholder="subject"
          value={subject}
          onChange={onChangeHandler}
        />
        <TextareaAutosize
          className="sent__email_description"
          name="description"
          rowsMax={30}
          aria-label="maximum height"
          placeholder="description"
          value={description}
          onChange={onChangeHandler}
        />
        <button onClick={sentEmailHandler}>sent</button>
      </div>
    </div>
  );
}

export default SentEmail;
