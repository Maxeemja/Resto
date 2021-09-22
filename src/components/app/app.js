import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WithRestoService from '../hoc/with-resto-service';


import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems();
    
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Route path='/' exact component={()=> <h1>HElooo</h1> } />
                <Route path='/menu' component={MainPage} />
                <Route path='/cart' component={CartPage} />
            </div>
        </Router>  
    )
}

export default WithRestoService()(App);