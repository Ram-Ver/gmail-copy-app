import React from "react";
import EmailRow from "../../Components/emailComponents/EmailRow";

function AllMails({ data }) {
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
          // getRowId={getRowId}
        />
      ))}
    </div>
  );
}

export default AllMails;
