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
    dispatch(setEmailRowId(id));
    history.push("/admin/detail");
  };
  return (
    <div className="email__row" onClick={() => onRowClickHandler(id)}>
      <div className="email__row__left__section">
        <Checkbox />
        {label === "stared" ? (
          <StarBorder style={{ color: "red" }} />
        ) : (
          <StarBorder />
        )}
        <h3>{title}</h3>
      </div>
      <div className="email__row__middle__section">
        <h3>{subject}</h3>
        <p>-{description}</p>
      </div>
      <div className="email__row__right__section">
        <span> 10pm</span>
        {/* <div>hello</div> */}
      </div>
    </div>
  );
}

export default EmailRow;
