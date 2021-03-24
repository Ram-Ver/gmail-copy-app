import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, TextareaAutosize } from "@material-ui/core";
import { fetchEmails, sentEmail } from "../../actions/emailActions";
import { useDispatch } from "react-redux";
import { hideSentBox } from "../../actions/otherActions";
import moment from "moment";
import { toast } from "react-toastify";

function SentEmail() {
  const [sentData, setSentData] = useState({
    title: "",
    subject: "",
    description: "",
    label: "sent",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(fetchEmails());
    };
  }, []);
  const sentEmailHandler = () => {
    if (sentData.title === "") {
      toast.error("title not allowed to be empty");
    } else if (sentData.subject === "") {
      toast.error("subject not allowed to be empty");
    } else if (sentData.description === "") {
      toast.error("description not allowed to be empty");
    } else {
      dispatch(sentEmail(sentData));
      dispatch(hideSentBox());
    }
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSentData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sentBoxHandler = () => {
    dispatch(hideSentBox());
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
