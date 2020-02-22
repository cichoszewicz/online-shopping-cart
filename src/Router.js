import React from 'react'
import { Switch, Route } from 'react-router'

import HomePage from './pages/homepage.js'
import CartPage from './pages/cartpage.js'

const Router = () => (
    <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route exact path = '/cart' component = {CartPage}/>
    </Switch>
)

export default Router