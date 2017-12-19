import React, { Component } from 'react';
import './TutorialDetail.css';
import posts from './posts';
import ReactMarkdown from 'react-markdown';

class TutorialDetail extends Component {

  render() {

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
