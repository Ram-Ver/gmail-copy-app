import PrivateRoute from "./Routes/PrivateRoute";
import PrivateLayout from "./Containers/PrivateLayout";
import PublicLayout from "./Containers/PublicLayout";
import PublicRoute from "./Routes/PublicRoute";


function App() {
  return (
    <>
      <PublicRoute exact path="/" component={() => <PublicLayout />} />
      <PrivateRoute exact path="/admin" component={() => <PrivateLayout />} />
    </>
  );
}

export default App;
