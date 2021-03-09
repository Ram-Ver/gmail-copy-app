import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  to,
  isAuthunticate,
  ...rest
}) => {
  const user = useSelector((state) => state.user);
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
