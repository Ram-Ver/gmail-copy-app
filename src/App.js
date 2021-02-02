import PrivateRoute from "./Components/Routes/PrivateRoute";
import PrivateLayout from "./Containers/PrivateLayout";
import PublicLayout from "./Containers/PublicLayout";


function App() {
  return (
    <>
      <PrivateRoute exact path="/" component={() => <PublicLayout />} />
      <PrivateRoute exact path="/admin" component={() => <PrivateLayout />} />
    </>
  );
}

export default App;
