import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import Display from './screens/Display';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/display" exact>
          <Display />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;