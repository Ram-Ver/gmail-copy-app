import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmailRow from "../../Components/emailComponents/EmailRow";

function Sheduled(props) {
  const data = useSelector((state) => state.emails.sheduled);
  useEffect(() => {
    console.log(props, "in sheduled");
  }, []);

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
