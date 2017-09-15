import React from 'react';
import CSS from './App.css';
import WatchPage from './pages/watch/WatchPage';

export default class App extends React.Component {

  render() {
    return (
      <div className={CSS.App}>
        <h1>YouTuber-Loop</h1>
        <WatchPage />
      </div>
    );
  }
}
