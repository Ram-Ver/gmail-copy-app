import PrivateRoute from "./Routes/PrivateRoute";
import PrivateLayout from "./Containers/PrivateLayout";
import PublicLayout from "./Containers/PublicLayout";
import PublicRoute from "./Routes/PublicRoute";
import CreateAnAccount from "./Containers/createAnAccount";


function App() {
  return (
    <>
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
