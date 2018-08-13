import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const RecipeNew = () => <h1>RecipeNew</h1>;

class App extends Component {
    //lifecycle method
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <Route
                                path="/dashboard/new"
                                component={RecipeNew}
                            />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
