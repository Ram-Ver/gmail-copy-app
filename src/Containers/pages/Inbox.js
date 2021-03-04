import React from "react";
import EmailRow from "../../Components/emailComponents/EmailRow";
import AppLoader from "../../Components/Loader";

function Inbox({ data, getRowId }) {
  console.log(data, "data in inbox");
  return (
    <div>
      {data === undefined ? (
        <AppLoader
          type="ThreeDots"
          color="#4285f4"
          height={100}
          width={100}
          timeout={5000}
        />
      ) : (
        data.map((item) => (
          <EmailRow
            key={item.id}
            id={item.id}
            title={item.title}
            subject={item.subject}
            description={item.description}
            time={item.time}
            getRowId={getRowId}
          />
        ))
      )}
    </div>
  );
}

export default Inbox;
