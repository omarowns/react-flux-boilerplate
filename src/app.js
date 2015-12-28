import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Login from './components/Login';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
        </Route>
    </Router>
), document.getElementById('app'));