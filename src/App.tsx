import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CardsProvider } from "./contexts/CardsContext";
import Browse from "./pages/Browse";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Login/Signup";
import { Preload } from "./pages/Preload";
import "./styles/globals.css";

function App() {
  return (
    <CardsProvider>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Switch>
            <Route exact path="/" component={Preload} />
            <Route path="/login" component={Login} />
            <Route path="/browse" component={Browse} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </AnimatePresence>
    </CardsProvider>
  );
}

export default App;
