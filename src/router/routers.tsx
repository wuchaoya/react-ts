/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Topic from '../containers/Topic';

class Routers extends React.Component {
    render () {
        return (
          <Router>
            <div>
              <Route path="/home" component={Home} />
              <Route path="/topic" component={Topic} />
            </div>
          </Router>
        );
    }
}

export default Routers;