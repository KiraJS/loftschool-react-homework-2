import React, { Component } from 'react';
import NewsPost from './NewsPost';

class App extends Component {
  state = {
    newsInput: '',
    // список постов
    news: [
      {
        id: 1,
        text: 'First post!',
      },
      {
        id: 2,
        text: 'Second post...',
      },
    ],
  };

  handleChange(e) {
    console.log('input value', e.target.value);
  }

  handleKeyDown(e) {
    console.log('keyCode', e.keyCode);
  }

  render() {
    const { news } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {news.map(post => <NewsPost key={post.id} text={post.text} />)}
      </div>
    );
  }
}

export default App;
