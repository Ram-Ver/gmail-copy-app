import React, { useEffect, useState } from "react";
import { DeleteForeverOutlined, StarBorder } from "@material-ui/icons";
import { axiosInstance } from "../../utility/https-client";
import Loader from "react-loader-spinner";
import Inbox from "../pages/Inbox";
import { Route, Switch } from "react-router-dom";
import { deleteEmail } from "../../actions/emailActions";
import { useDispatch } from "react-redux";
import { Checkbox, IconButton } from "@material-ui/core";
import { toast} from "react-toastify";


function EmailList() {
  const dispatch = useDispatch();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    axiosInstance.get("/emails").then((response) => setData(response.data));
  }, []);

  const deleteEmailHandler = (id) => {
    console.log(id,  "id");
    axiosInstance.delete(`/emails/${id}`)
    dispatch(deleteEmail(id));
    toast.success("Deleted Successfully")
  };

  return (
    <div className="email__list">
      <div className="email__row__container">
        {data === undefined ? (
          <div className="loader">
            <Loader
              type="ThreeDots"
              color="#4285f4"
              height={100}
              width={100}
              timeout={5000}
            />
          </div>
        ) : (
          data.map((item) => (
            <div className="email__row" key={item.id}>
              <div className="email__row__left__section">
                <Checkbox />
                <StarBorder />
                <h3>{item.title}</h3>
              </div>

              <h3>{item.subject}</h3>
              <p>{item.description}</p>
              {item.time}
              <IconButton onClick={()=>deleteEmailHandler(item.id)}>
                <DeleteForeverOutlined />
              </IconButton>
            </div>
          ))
        )}
      </div>
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
      </Switch>
    </div>
  );
}

export default EmailList;
