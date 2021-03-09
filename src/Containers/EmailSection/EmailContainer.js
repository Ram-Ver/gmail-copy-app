import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import EmailHeaderOptions from "../../Components/emailComponents/EmailHeaderOptions";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxOutlined from "@material-ui/icons/InboxOutlined";
import { useDispatch } from "react-redux";
import axiosInstance from "../../utility/axiosInstance";
import { deleteEmail } from "../../actions/emailActions";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { DeleteForeverOutlined, StarBorder } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import {
  Inbox,
  Sent,
  Stared,
  Snoozed,
  Draft,
  Primary,
  Promotion,
  Social,
  NotFound,
} from "../pages";
import EmailDetail from "../../Components/emailComponents/EmailDetail";

function EmailContainer(props) {
  const [data, setData] = useState(undefined);

  const path = props.path;
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get("/emails").then((response) => setData(response.data));
  }, []);

  const deleteEmailHandler = (id) => {
    console.log(id, "id");
    axiosInstance.delete(`/emails/${id}`);
    dispatch(deleteEmail(id));
    toast.success("Deleted Successfully");
  };

  return (
    <div className="email__Container">
      <div className="email__tools__header">
        <div className="email__tools__left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email__tools__right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className="email__header__options">
        <EmailHeaderOptions
          Icon={InboxOutlined}
          title="Primary"
          color="red"
          selected={false}
          path={"/admin/primary"}
        />
        <EmailHeaderOptions
          Icon={PeopleIcon}
          title="Social"
          color="blue"
          selected={false}
          path={"/admin/social"}
        />
        <EmailHeaderOptions
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
          selected={false}
          path={"/admin/promotion"}
        />
      </div>
      <div className="email__list">
        <div className="email__row__container">
          <Switch>
            <Route
              exact
              path={`${props.path}/inbox`}
              component={() => <Inbox data={data} />}
            />
            <Route exact path={`${path}/stared`} component={() => <Stared />} />
            <Route exact path={`${path}/sent`} component={() => <Sent />} />
            <Route
              exact
              path={`${path}/snoozed`}
              component={() => <Snoozed />}
            />
            <Route exact path={`${path}/draft`} component={() => <Draft />} />
            <Route
              exact
              path={`${path}/promotion`}
              component={() => <Promotion />}
            />
            <Route
              exact
              path={`${path}/primary`}
              component={() => <Primary />}
            />
            <Route exact path={`${path}/social`} component={() => <Social />} />
            <Route
              exact
              path={`${path}/detail`}
              component={() => <EmailDetail />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default EmailContainer;
