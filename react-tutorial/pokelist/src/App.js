import Home from './pages/home/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Route>
  );
}

export default App;
