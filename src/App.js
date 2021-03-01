import PrivateRoute from "./Routes/PrivateRoute";
import PrivateLayout from "./Containers/PrivateLayout";
import PublicLayout from "./Containers/PublicLayout";
import PublicRoute from "./Routes/PublicRoute";
import CreateAnAccount from "./Containers/createAnAccount";
import { ToastContainer, Flip } from "react-toastify";


function App() {
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
      <PublicRoute exact path="/" component={() => <PublicLayout />} />
      <PublicRoute
        exact
        path="/create-an-account"
        component={() => <CreateAnAccount />}
      />

      <PrivateRoute exact path="/admin" component={() => <PrivateLayout />} />
    </>
  );
}

export default App;
