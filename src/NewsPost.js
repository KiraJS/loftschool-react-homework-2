import React, {Component} from 'react';

class NewsPost extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
        <input type="text"/>
      </div>
    );
  }
}

export default NewsPost;
