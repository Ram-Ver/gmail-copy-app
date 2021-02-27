import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton, TextareaAutosize } from "@material-ui/core";
import { sentEmail } from "../../actions/action";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../utility/https-client";

function SentEmail(props) {
  const [sentData, setSentData] = useState({
    title: "",
    subject: "",
    description: "",
  });

  const dispatch = useDispatch();
  const sentEmailHandler = () => {
    console.log(sentData,"20")
    setSentData({
      title: "",
      subject: "",
      description: "",
    });
    // axiosInstance
    //   .post("/emails", { title, subject, description })
    //   .then((response) => console.log(response));
    dispatch(sentEmail(sentData));
  };

  const onChangeHandler = (e) =>  {
    const {  value,  name  } = e.target;;
    setSentData(prev=>{return{...prev,[name]:value}})
  };

 
  const {title,subject,description} = sentData
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
        <Button
        onClick={sentEmailHandler}
        >
          sent
        </Button>
      </div>
    </div>
  );
}

export default SentEmail;
