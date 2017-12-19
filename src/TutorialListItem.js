import React, { Component } from 'react';
import './TutorialListItem.css';
import { Link } from 'react-router-dom';

class TutorialListItem extends Component {
  render() {
    return (
      <div className='tutorial-list-item'>
        <Link
          to={ this.props.path }
          title="001 Basic Layouts"
          intro="Learn how Row, Column widgets can be used for easy layouts.">
          <p className='title'>{ this.props.item.title }</p>
        </Link>
        <p className='blurb'>{ this.props.item.blurb }</p>
        <p className='created'>
          posted { this.props.item.created }
          &nbsp;by <a href={ this.props.item.author_link } target='_blank'>{ this.props.item.author }</a>
        </p>
      </div>
    );
  }
}

export default TutorialListItem;
