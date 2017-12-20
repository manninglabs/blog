import React, { Component } from 'react';
import './TutorialDetail.css';
import posts from './posts';
import ReactMarkdown from 'react-markdown';
import mixpanel from 'mixpanel-browser';

class TutorialDetail extends Component {

  render() {
    mixpanel.init('831c108f9cb2220b0e431bbb7f97493c');
    if (process.env.NODE_ENV === 'production') {
      console.log('tracking');
      mixpanel.track(`tutorialdetail${this.props.match.params.id}-visited`);
    };

    // more info: https://reacttraining.com/react-router/web/example/basic
    var post = posts.getItem(this.props.match.params.id);

    return (
      <div>
        <h1>{ post.title }</h1>
        <ReactMarkdown source={ post.content } />
      </div>
    );
  }
}

export default TutorialDetail;
