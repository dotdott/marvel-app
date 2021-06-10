import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }: any) {
  const { id } = useSelector((state: any) => state.stateUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        return id !== "" ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
