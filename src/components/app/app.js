import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom';

import WithRestoService from '../hoc/with-resto-service';


import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems();
    
    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader/>
                <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/cart' exact component={CartPage} />
                    <Route path='/:id' component={ItemPage} />
                </Switch>
            </div>
    )
}

export default WithRestoService()(App);