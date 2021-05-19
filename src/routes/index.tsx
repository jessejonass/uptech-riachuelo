import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Details from '../views/Details';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
        </Switch>
    );
};

export default Routes;
