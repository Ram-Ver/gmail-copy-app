import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmail, getEmailDetail } from "../../actions/emailActions";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

function EmailDetail(props) {
  const dispatch = useDispatch();
  const mailDetail = useSelector((state) => state.emails.mailDetail);
  const id = props.match.params.id;
  const history = props.history;

  useEffect(() => {
    dispatch(getEmailDetail(id));
  }, []);

  const deleteEmailHandler = () => {
    dispatch(deleteEmail(id));
    history.goBack();
  };

  return (
    <div className="email__detail">
      <div className="email__detail__header">
        <div className="email__title">
          <p> {mailDetail?.title}</p>
          <LabelImportantIcon />
        </div>
        <IconButton onClick={deleteEmailHandler}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="email__subject">
        <h4>{mailDetail?.subject}</h4>
      </div>

      <div className="email__detail__body">
        <p>{mailDetail?.description}</p>
      </div>
      <div className="email__footer">
        <span>{mailDetail?.time}</span>
      </div>
    </div>
  );
}

export default EmailDetail;
