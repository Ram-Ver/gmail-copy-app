import React from "react";
import { useSelector } from "react-redux";
import EmailRow from "../../Components/emailComponents/EmailRow";

function Inbox() {
  const data = useSelector((state) => state.emails.inbox);

  return (
    <div>
      {data.map((item) => (
        <EmailRow
          key={item.id}
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

export default Inbox;
