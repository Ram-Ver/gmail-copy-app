import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
