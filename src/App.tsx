import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/globals.css';

import Browse from './pages/Browse';
import { Preload } from './pages/Preload';
import { Signup } from './pages/Login/Signup';
import { Login } from './pages/Login';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <Switch>
      {/* initial={false} */}
        <AnimatePresence exitBeforeEnter>
          <Route exact path="/" component={Preload} />
          <Route path="/login" component={Login} />
          <Route path="/browse" component={Browse} />
          <Route path="/signup" component={Signup} />
        </AnimatePresence>
      </Switch>
    </Router>
  );
}

export default App;
