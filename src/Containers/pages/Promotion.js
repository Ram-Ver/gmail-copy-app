import React from "react";
import { useSelector } from "react-redux";
import EmailRow from "../../Components/emailComponents/EmailRow";

function Promotion() {
  const data = useSelector((state) => state.emails.promotion);

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

export default Promotion;
