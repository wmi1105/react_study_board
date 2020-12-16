import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import board from './Board';
import board2 from './BoardMain';

class routes extends Component{
    render(){
        return(
            <Router>
                <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/board" component={board}/>
                <Route exact path="/board2" component={board2}/>
                </div>
            </Router>
        )
    }
}


export default routes;