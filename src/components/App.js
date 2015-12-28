import React from 'react';
import { Link } from 'react-router';
import LoginStore from '../stores/LoginStore';

class App extends React.Component {
    constructor() {
        super()
        this.state = this._getLoginState();
    }

    _getLoginState() {
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        }
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">React Flux</a>
                    </div>
                    {this.headerItems}
                </nav>
                {this.props.children}
            </div>
        );
    }

    get headerItems() {
        if (!this.state.userLoggedIn) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            );
        }
    }
}

export default App;