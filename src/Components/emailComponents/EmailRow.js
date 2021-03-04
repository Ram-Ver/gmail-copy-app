import { Checkbox } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setEmailRowId } from "../../actions/emailActions";

function EmailRow({ title, subject, description, time, id }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const onRowClickHandler = (id) => {
    dispatch(setEmailRowId(id))
    history.push("/admin/detail")
  }
  return (
    <div className="email__row" onClick={()=>onRowClickHandler(id)}>
      <div className="email__row__left__section">
        <Checkbox />
        <StarBorder />
        <h3>{title}</h3>
      </div>

      <h3>{subject}</h3>
      <p>{description}</p>
      {time}
    </div>
  );
}

export default EmailRow;
