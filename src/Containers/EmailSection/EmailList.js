import React from "react";
import EmailRow from "./EmailRow";
import { StarBorder } from "@material-ui/icons";

function EmailList() {
  return (
    <div className="email__list">
      <div className="email__row__container">
        <EmailRow
          Icon={StarBorder}
          title="title"
          subject="this is a subject"
          description="this is description of mail"
          time="10pm"
        />
        <EmailRow
          Icon={StarBorder}
          title="title"
          subject="this is a subject"
          description="this is description of mail"
          time="10pm"
        />
        <EmailRow
          Icon={StarBorder}
          title="title"
          subject="this is a subject"
          description="this is description of mail"
          time="10pm"
        />
        <EmailRow
          Icon={StarBorder}
          title="title"
          subject="this is a subject"
          description="this is description of mail"
          time="10pm"
        />
        <EmailRow
          Icon={StarBorder}
          title="title"
          subject="this is a subject"
          description="this is description of mail"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
