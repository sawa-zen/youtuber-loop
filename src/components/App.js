import React from 'react';
import CSS from './App.css';
import Header from './header/Header';

const App = ({ children }) => (
  <div className={CSS.App}>
    <Header />
    <div>
      {children}
    </div>
  </div>
);
export default App;
