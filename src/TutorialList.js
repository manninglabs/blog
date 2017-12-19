import React, { Component } from 'react';
import './TutorialList.css';
import TutorialListItem from './TutorialListItem';
import posts from './posts';

class TutorialList extends Component {
  render() {

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
