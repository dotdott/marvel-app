import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/globals.css';

import Browse from './pages/Browse';
import { Preload } from './pages/Preload';
import { Signup } from './pages/Login/Signup';
import { Login } from './pages/Login';
import { AnimatePresence } from 'framer-motion';
import { CardsProvider } from './contexts/CardsContext';

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
