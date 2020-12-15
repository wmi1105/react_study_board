import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import board from './Board';

class routes extends Component{
    render(){
        return(
            <Router>
                <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/board" component={board}/>
                </div>
            </Router>
        )
    }
}


export default routes;