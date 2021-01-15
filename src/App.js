import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './common/utils/history';
import { TodoPage, LoginPage } from './pages/public';

export const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/todo' component={TodoPage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}
