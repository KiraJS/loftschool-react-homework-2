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

  getNewsId = () => {
    return Math.random()
      .toString()
      .slice(2, 8);
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const { news } = this.state;
      const text = this.state.newsInput;
      this.setState({ newsInput: '' });
      this.setState({ news: [...news, { id: this.getNewsId(), text }] });
    }
  };

  render() {
    const { news, newsInput } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {news.map(post => <NewsPost key={post.id} text={post.text} />)}
      </div>
    );
  }
}

export default App;
