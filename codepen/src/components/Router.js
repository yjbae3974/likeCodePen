import React from 'react'
import {Switch, Link, Route} from 'react-router-dom';
import Home from './Home';
import Edit화면 from './edit화면';

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/editor" component={Edit화면}></Route>
            </Switch>
        </div>
    )
}
