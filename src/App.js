import PrivateRoute from "./Routes/PrivateRoute";
import PrivateLayout from "./Containers/PrivateLayout";
import PublicLayout from "./Containers/PublicLayout";
import PublicRoute from "./Routes/PublicRoute";
import CreateAnAccount from "./Containers/createAnAccount";
import { ToastContainer, Flip } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "./Containers/pages";


function App() {
  const isAuthunticate = true;
  return (
    <>
      <ToastContainer
        position="top-center"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        autoClose={5000}
        pauseOnFocusLoss={false}
        draggable
        transition={Flip}
        hideProgressBar
      />
      <Switch>
        <PublicRoute exact path="/" component={() => <PublicLayout />} />
        <PublicRoute
          path="/create-an-account"
          component={() => <CreateAnAccount />}
        />

        <PrivateRoute
          isAuthunticate={isAuthunticate}
          path="/admin/:name"
          to="/"
          component={(props) => <PrivateLayout {...props} />}
        />

        <Route component={NotFound}   />
      </Switch>
    </>
  );
}

export default App;
