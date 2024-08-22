import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" component={LandingPage} />
        <Route path="/portfolio" component={Services} />
        <Route path="/location" component={MapContainer} />


        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default Routes;
