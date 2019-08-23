import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Events from '../events/Events';
import Event from '../event/Event';
import NotFound from '../layout/NotFound';
// import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={Event} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
