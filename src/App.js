import React, { Component } from 'react';
import TutorialList from './TutorialList';
import TutorialDetail from './TutorialDetail';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TutorialList}/>
          <Route path="/tutorials/:id" component={TutorialDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
