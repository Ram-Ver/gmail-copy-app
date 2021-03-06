import PrivateLayout from "./Containers/PrivateLayout.js";
import CreateAnAccount from "./Containers/createAnAccount";
import { ToastContainer, Flip } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "./Containers/pages";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import LoginComponent from "./Containers/Login.js";
import AppLoader from "./Components/Loader.js";

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
        <PublicRoute exact path="/" component={LoginComponent} />
        <PublicRoute path="/create-an-account" component={CreateAnAccount} />

        {/* Private Route */}

        <PrivateRoute
          isAuthunticate={isAuthunticate}
          path="/admin/:name"
          to="/"
          component={PrivateLayout}
        />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
