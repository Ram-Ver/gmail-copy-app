import React from "react";
import EmailRow from "../../Components/emailComponents/EmailRow";

function Sheduled({ data }) {
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
          // getRowId={getRowId}
        />
      ))}
    </div>
  );
}

export default Sheduled;
