import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { CardsProvider } from "./contexts/CardsContext";
import Browse from "./pages/Browse";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Preload } from "./pages/Preload";
import { Types } from "./store/reducers/userReducer";
import { IUser } from "./store/types";
import "./styles/globals.css";
import { IStateUserProps } from "./types_global";

function App() {
  const { save_login, id } = useSelector(
    (state: IStateUserProps) => state.stateUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== "" && save_login !== true) {
      dispatch({
        type: Types.CLEAN_USER_STORE,
      });
    }
  }, []);

  return (
    <CardsProvider>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Switch>
            <Route exact path="/" component={Preload} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/browse" component={Browse} />
          </Switch>
        </Router>
      </AnimatePresence>
    </CardsProvider>
  );
}

export default App;
