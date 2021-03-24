import PrivateLayout from "./Containers/PrivateLayout.js";
import PublicLayout from "./Containers/PublicLayout.js";
import CreateAnAccount from "./Containers/createAnAccount";
import { ToastContainer, Flip } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "./Containers/pages";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";

function App() {
  const isAuthunticate = localStorage.getItem("login");
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
        {/* public route */}
        <PublicRoute exact path="/" component={() => <PublicLayout />} />
        <PublicRoute
          path="/create-an-account"
          component={() => <CreateAnAccount />}
        />

        {/* Private Route */}

        <PrivateRoute
          isAuthunticate={isAuthunticate}
          path="/admin/:name"
          to="/"
          component={(props) => <PrivateLayout {...props} />}
        />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
