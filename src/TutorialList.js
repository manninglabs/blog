import React, { Component } from 'react';
import './TutorialList.css';
import TutorialListItem from './TutorialListItem';
import posts from './posts';
import mixpanel from 'mixpanel-browser';

class TutorialList extends Component {
  render() {
    mixpanel.init('831c108f9cb2220b0e431bbb7f97493c');
    if (process.env.NODE_ENV === 'production') {
      console.log('tracking');
      mixpanel.track('tutoriallist-visited');
    };

    var rows = posts.data.map((item, index) => {
        return <TutorialListItem
                    key={ index }
                    path={ "/tutorials/" + item.id }
                    item={ item }/>
    })

    return (
      <div>
        <img className='nav-logo' alt='nav-logo' src={require('./manning-teaches-flutter.png')} />
        <h1>Flutter Tutorials (beta)</h1>
        <p>"Flutter is a new mobile app SDK to help developers and designers build modern mobile apps for iOS and Android." (<a href="https://flutter.io">flutter.io</a>)</p>
        { rows }
      </div>
    );
  }
}

export default TutorialList;
