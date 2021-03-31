import { Checkbox, IconButton, Button } from "@material-ui/core";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  Inbox,
  Sent,
  Stared,
  Snoozed,
  Draft,
  Primary,
  Promotion,
  Social,
  Important,
  Chat,
  Sheduled,
  AllMails,
  Spam,
} from "../pages";
import EmailDetail from "../../Components/emailComponents/EmailDetail";
import { fetchEmails } from "../../actions/emailActions";

function EmailContainer(props) {
  const emails = useSelector((state) => state.emails);
  const path = props.path;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmails());
  }, []);

  const refreshEmailHandler = () => {
    dispatch(fetchEmails());
  };

  const { allEmails, promotion, primary, social } = emails;

  return (
    <div className="email__Container">
      <div className="email__tools__header">
        <div className="email__tools__left">
          <Button>
            <Checkbox />
            <ArrowDropDownIcon />
          </Button>

          <IconButton onClick={refreshEmailHandler}>
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
          <span className="pagination__count">1-{allEmails.length}</span>
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
          number={primary.length}
          title="Primary"
          color="red"
          selected={false}
          path={"/admin/primary"}
        />
        <EmailHeaderOptions
          Icon={PeopleIcon}
          number={social.length}
          title="Social"
          color="blue"
          selected={false}
          path={"/admin/social"}
        />
        <EmailHeaderOptions
          Icon={LocalOfferIcon}
          number={promotion.length}
          title="Promotions"
          color="green"
          selected={false}
          path={"/admin/promotion"}
        />
      </div>
      <div className="email__list">
        <div className="email__row__container">
          <Switch>
            <Route exact path={`${path}/inbox`} component={Inbox} />
            <Route exact path={`${path}/stared`} component={Stared} />
            <Route exact path={`${path}/sent`} component={Sent} />
            <Route exact path={`${path}/snoozed`} component={Snoozed} />
            <Route exact path={`${path}/draft`} component={Draft} />
            <Route exact path={`${path}/important`} component={Important} />
            <Route exact path={`${path}/chat`} component={Chat} />
            <Route exact path={`${path}/sheduled`} component={Sheduled} />
            <Route exact path={`${path}/allmails`} component={AllMails} />
            <Route exact path={`${path}/spam`} component={Spam} />
            <Route exact path={`${path}/promotion`} component={Promotion} />
            <Route exact path={`${path}/primary`} component={Primary} />
            <Route exact path={`${path}/social`} component={Social} />
            <Route exact path={`${path}/detail/:id`} component={EmailDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default EmailContainer;
