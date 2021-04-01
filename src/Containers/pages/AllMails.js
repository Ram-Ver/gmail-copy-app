import React from "react";
import { useSelector } from "react-redux";
import EmailRow from "../../Components/emailComponents/EmailRow";

function AllMails() {
  const data = useSelector((state) => state.emails.allEmails);

  return (
    <div>
      {data.map((item) => (
        <EmailRow
          key={item.id}
          label={item.label}
          id={item.id}
          title={item.title}
          subject={item.subject}
          description={item.description}
          time={item.time}
        />
      ))}
    </div>
  );
}

export default AllMails;
