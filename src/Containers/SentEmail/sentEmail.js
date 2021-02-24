import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton, TextareaAutosize } from "@material-ui/core";
import { sentEmail } from "../../actions/action";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../utility/https-client";

function SentEmail(props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const sentEmailHandler = (e) => {
    axiosInstance
      .post("/email", { title, subject, description })
      .then((response) => console.log(response));
    // dispatch(sentEmail({ title, subject, description }));
  };
  return (
    <div className="sent__email">
      <div className="sent__email__header">
        <h3>New Mail</h3>
        <IconButton onClick={props.modalHandler}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="sent__email__body">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          subject
        />
        <TextareaAutosize
          className="sent__email_description"
          // rowsMin={30}
          rowsMax={30}
          aria-label="maximum height"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button onClick={sentEmailHandler}>sent</Button>
      </div>
    </div>
  );
}

export default SentEmail;
