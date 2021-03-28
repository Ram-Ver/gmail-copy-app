import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const PrivateRoute = ({
  component: Component,
  to,
  isAuthunticate,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) =>
          isAuthunticate ? (
            <>
              <Component {...props} />
            </>
          ) : (
            <Redirect to={to} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
