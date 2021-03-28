import { Checkbox } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setEmailRowId } from "../../actions/emailActions";

function EmailRow({ title, subject, description, time, id, label }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onRowClickHandler = (id) => {
    // dispatch(setEmailRowId(id));
    history.push(`/admin/detail/${id}`);
  };
  const onCheckHandler = (e) => {
    console.log(e.target.checked, "event of check box");
  };
  return (
    <div className="email__row">
      <div className="email__row__left__section">
        <Checkbox onChange={onCheckHandler} />
        {label === "stared" ? (
          <StarBorder style={{ color: "red" }} />
        ) : (
          <StarBorder />
        )}
        <h3>{title}</h3>
      </div>
      <div
        className="email__row__middle__section"
        onClick={() => onRowClickHandler(id)}>
        <h3>{subject}</h3>
        <p>-{description}</p>
      </div>
      <div className="email__row__right__section">
        <span> 10pm</span>
      </div>
    </div>
  );
}

export default EmailRow;
