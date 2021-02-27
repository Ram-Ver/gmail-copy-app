import React, { useEffect } from "react";
import EmailRow from "./EmailRow";
import { StarBorder } from "@material-ui/icons";
import { axiosInstance } from "../../utility/https-client";

function EmailList() {
  const [data, setData] = React.useState(undefined);
  useEffect(() => {
   axiosInstance.get("/emails").then((response) => setData(response.data));
  }, []);

  useEffect(()=>{
    console.log("working")
  },[data])
  

  return (
    <div className="email__list">
      <div className="email__row__container">
        {data === undefined
          ? "loading...."
          : data.map((item) => (
                <EmailRow
                key={item.id}
                  Icon={StarBorder}
                  title={item.title}
                  subject={item.subject}
                  description={item.description}
                  time={item.time}
                />
              ))}
            {/* null} */}
      </div>
    </div>
  );
}

export default EmailList;
